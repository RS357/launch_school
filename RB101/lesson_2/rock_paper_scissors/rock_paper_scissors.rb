VALID_CHOICES = {
  'rock' => 'r',
  'paper' => 'p',
  'scissors' => 's',
  'spock' => 'sp',
  'lizard' => 'l'
}

WINNING_MOVES = {
  'rock' => %w(scissors lizard),
  'lizard' => %w(paper spock),
  'spock' => %w(scissors rock),
  'scissors' => %w(paper lizard),
  'paper' => %w(rock spock)
}

def prompt(message)
  Kernel.puts("=> #{message}")
end

def clear_screen
  system('clear') || system('cls')
end

def reset_score
  reset_score = {
    player: 0,
    computer: 0
  }
end

def increment_score(score, key)
  score[key] += 1
end

def win?(first, second)
  WINNING_MOVES[first].include?(second)
end

def result(player, computer)
  if win?(player, computer)
    'player'
  elsif win?(computer, player)
    'computer'
  else
    'tie'
  end
end

def set_score(winner, score)
  if winner == 'player'
    increment_score(score, :player)
  elsif winner == 'computer'
    increment_score(score, :computer)
  end
end

def print_score(winner, score)
  both_score_message = <<~MSG
    You've won #{score[:player]} games,
    computer has won #{score[:computer]} games
  MSG

  if winner == 'player'
    prompt("You won! #{both_score_message}")
  elsif winner == 'computer'
    prompt("Computer won! #{both_score_message}")
  else
    prompt("Tie!")
  end
end

def retrieve_choice
  loop do
    choose = <<~MSG
      Choose one: #{VALID_CHOICES.keys.join(', ')}
      You can also enter the shortened versions: #{VALID_CHOICES.values.join(', ')}
    MSG

    prompt(choose)

    choice = gets.chomp

    if VALID_CHOICES.include?(choice)
      return choice
    elsif VALID_CHOICES.value?(choice)
      return choice = VALID_CHOICES.key(choice)
    else
      prompt("Invalid choice - please try again")
    end
  end
end

def random_choice
  VALID_CHOICES.to_a.sample[0]
end

def display_choices(user_choice, computer_choice)
  prompt("You chose #{user_choice}; computer chose: #{computer_choice}")
end

def display_grand_winner(score)
  prompt("#{score.key(GOAL_WINS)} has won #{GOAL_WINS} games - #{score.key(GOAL_WINS)} wins!")
end

def someone_grand_winner(score)
  score.value?(GOAL_WINS)
end

def play_again?
  loop do
    valid_answers = ['y', 'yes', 'no', 'n']
    prompt("Do you want to play again? Y/N")
    answer = gets.chomp.downcase
    next prompt("Invalid entry, try again") unless valid_answers.include?(answer)
    break false if answer == 'n' || answer == 'no'
    break true if answer == 'y' || answer == 'yes'
  end
end

def display_goodbye
  prompt("Thank you for playing. Good bye!")
end

score = {
  player: 0,
  computer: 0
}

GOAL_WINS = 5

loop do
  prompt("Welcome to rock-paper-scissors!")
  prompt("First to five game wins wins the round!")

  user_choice = retrieve_choice

  computer_choice = random_choice

  display_choices(user_choice, computer_choice)

  winner = result(user_choice, computer_choice)

  set_score(winner, score)

  print_score(winner, score)

  break display_grand_winner(score) if someone_grand_winner(score)

  break unless play_again?
end

display_goodbye

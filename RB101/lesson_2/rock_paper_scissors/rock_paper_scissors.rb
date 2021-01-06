VALID_CHOICES = {
  'rock' => 'r',
  'paper' => 'p',
  'scissors' => 's',
  'spock' => 'sp',
  'lizard' => 'l'
}

score = {
  player: 0,
  computer: 0
}

winning_moves = {
  'rock' => %w(scissors lizard),
  'lizard' => %w(paper spock),
  'spock' => %w(scissors rock),
  'scissors' => %w(paper lizard),
  'paper' => %w(rock spock)
}

def prompt(message)
  Kernel.puts("=> #{message}")
end

def increment_score(score, key)
  score[key] += 1
end

def win?(winning_moves, first, second)
  winning_moves[first].include?(second)
end

def result(winning_moves, player, computer)
  if win?(winning_moves, player, computer)
    'player'
  elsif win?(winning_moves, computer, player)
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

loop do
  choice = ''
  loop do
    choose = <<~MSG
      Choose one: #{VALID_CHOICES.keys.join(', ')}
      You can also enter the shortened versions: #{VALID_CHOICES.values.join(', ')}
    MSG

    prompt(choose)

    choice = gets.chomp

    if VALID_CHOICES.include?(choice)
      break
    elsif VALID_CHOICES.value?(choice)
      choice = VALID_CHOICES.key(choice)
      break
    else
      prompt("Invalid choice - please try again")
    end
  end

  computer_choice = VALID_CHOICES.to_a.sample[0]

  prompt("You chose #{choice}; computer chose: #{computer_choice}")

  winner = result(winning_moves, choice, computer_choice)

  set_score(winner, score)

  print_score(winner, score)

  if score.value?(5)
    prompt("#{score.key(5)} has won 5 games - #{score.key(5)} wins!")
    break
  end

  prompt("Do you want to play again? Y/N")
  answer = Kernel.gets().chomp()
  break unless answer.downcase().start_with?('y')
end

prompt("Thank you for playing. Good bye!")

require 'yaml'
MESSAGES = YAML.load_file('messages.yml')

# def clear_screen
#   system 'clear' || system 'cls'
# end

def prompt(message)
  puts "=> #{message}"
end

def valid_float?(input)
  Float(input) rescue false
end

def valid_integer?(integer)
  Integer(integer) rescue false
end

def valid_loan_amount?(amount)
  return [MESSAGES['invalid_loan_negative'], false] if amount.to_f <= 0

  if valid_float?(amount) == false
    return [MESSAGES['invalid_loan_datatype'], false]
  end

  amount.to_s.split('').each_index do |index|
    if amount.to_s[index] == '.' && index != -3
      return [MESSAGES['invalid_loan_decimal'], false]
    end
  end
  [nil, true]
end

def years_months_prompt
  <<~MSG
    You will now be asked how many years your loan will last for. Please enter
    the number of years only. After that you will be asked how many months your
    loan will last for. This calculator will then add both together
    E.g - if your loan will last for 12 years and 4 months, input 12
    for the next question and 4 for the question after that.
  MSG
end

def valid_apr?(apr)
  return [MESSAGES['invalid_apr_negative'], false] if apr.to_f <= 0
  if valid_float?(apr) == false
    return [MESSAGES['invalid_apr_datatype'], false]
  end
  [nil, true]
end

def valid_loan_years?(years)
  return [MESSAGES['invalid_input_negative'], false] if years.to_i <= 0
  if valid_integer?(years) == false
    return [MESSAGES['invalid_years_float'], false]
  end

  years.to_s.split('').each_index do |index|
    if years.to_s[index] == '.'
      return [MESSAGES['invalid_float'], false]
    end
  end
  [nil, true]
end

def valid_loan_months?(months)
  return [MESSAGES['invalid_input_negative'], false] if months.to_i < 0
  return [MESSAGES['too_many_months'], false] if months.to_i > 11
  return [MESSAGES['invalid_float'], false] if valid_integer?(months) == false

  months.to_s.split('').each_index do |index|
    if months.to_s[index] == '.'
      return [MESSAGES['invalid_float'], false]
    end
  end
  [nil, true]
end

def calculate_loan_months(loan_months, loan_years)
  loan_months + (loan_years * 12)
end

def calculate_monthly_rate(apr)
  apr / 12 / 100
end

def calculate_monthly_payment(monthly_rate, total_loan_months, loan_amount)
  loan_amount * (monthly_rate / (1 - (1 + monthly_rate)**(-total_loan_months)))
end

def calculate_total_payments(total_loan_months, monthly_payment)
  (total_loan_months * monthly_payment).round(2)
end

def display_results(monthly_rate, monthly_payment, total_loan_months,
                    total_of_payments)
  <<~MSG
    Monthly interest rate: #{monthly_rate.round(2)}%
    Payment every month: $#{monthly_payment.round(2)}
    Total of #{total_loan_months.to_i} payments: $#{total_of_payments}
  MSG
end

def get_from_user(variable, verify_method, enter_message)
  loop do
    prompt(enter_message)
    variable = gets.chomp

    verified_msg_arr = verify_method.call(variable)

    break if verified_msg_arr[1]

    prompt(verified_msg_arr[0])
  end
  variable.to_f
end

def calculate_again?
  go_again = ''
  loop do
    puts MESSAGES['another_calculation']
    go_again = gets.chomp.downcase
    break if ['y', 'yes', 'n', 'no'].include?(go_again)
    puts "Please enter 'Y' or 'N': "
  end
  go_again.start_with?('y')
end

keep_going = true

# inputs
loan_amount = 0
apr = 0
loan_years = 0
loan_months = 0

while keep_going == true
  # clear_screen
  prompt(MESSAGES['welcome'])

  loan_amount = get_from_user(loan_amount,
                              method(:valid_loan_amount?),
                              MESSAGES['enter_loan_amount'])

  apr = get_from_user(apr, method(:valid_apr?), MESSAGES['enter_apr'])

  prompt(years_months_prompt)

  loan_years = get_from_user(loan_years, method(:valid_loan_years?),
                             MESSAGES['enter_loan_duration_years'])

  loan_months = get_from_user(loan_months, method(:valid_loan_months?),
                              MESSAGES['enter_loan_duration_months'])

  total_loan_months = calculate_loan_months(loan_months, loan_years)

  monthly_rate = calculate_monthly_rate(apr)

  monthly_payment = calculate_monthly_payment(monthly_rate,
                                              total_loan_months, loan_amount)

  total_of_payments = calculate_total_payments(total_loan_months,
                                               monthly_payment)

  display_results(monthly_rate, monthly_payment, total_loan_months,
                  total_of_payments)

  result = <<~MSG
    Monthly interest rate: #{monthly_rate.round(2)}%
    Payment every month: $#{monthly_payment.round(2)}
    Total of #{total_loan_months.to_i} payments: $#{total_of_payments}
  MSG

  prompt(result)

  keep_going = calculate_again?
end

prompt(MESSAGES['goodbye'])

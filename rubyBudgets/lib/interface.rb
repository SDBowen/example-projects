require_relative 'budget'

my_budget = Budget.new('My Budget', 100)

p my_budget.items
p my_budget.remaining
p my_budget.add_item('taco', 8)
p my_budget.remaining
p my_budget.items

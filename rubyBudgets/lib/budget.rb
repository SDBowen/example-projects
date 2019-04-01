class Budget
  attr_reader :name, :amount, :spent, :items

  def initialize(name, amount)
    @name = name
    @amount = amount
    @spent = 0
    @items = []
  end

  def add_item(item, cost)
    @items << item
    @spent += cost
  end

  def remaining
    @amount - @spent
  end
end

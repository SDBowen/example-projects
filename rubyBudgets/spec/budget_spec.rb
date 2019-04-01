require_relative '../lib/budget'

describe Budget do
  before do
    @budget = Budget.new('Monthly Budget', 800)
  end

  it 'should return a Budget instance' do
    expect(@budget).to be_an_instance_of(Budget)
  end

  it 'has the required attributes' do
    expect(@budget.name).to eq('Monthly Budget')
    expect(@budget.amount).to eq(800)
    expect(@budget.spent).to eq(0)
    expect(@budget.items).to eq([])
  end

  it 'can return remaining budget amount' do
    @budget.add_item('dinner', 50)
    @budget.add_item('drinks', 20)
    expect(@budget.remaining).to eq(730)
  end

  it 'can return purchased items' do
    @budget.add_item('bike', 500)
    @budget.add_item('helmet', 40)
    expect(@budget.items).to eq(%w[bike helmet])
  end
end

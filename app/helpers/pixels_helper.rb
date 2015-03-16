module PixelsHelper
  require 'bitcoin'
  include VanityHelper
  
  def prepare_pixesl_array(dimensions)
    data = []
    row = []
    dimensions[:y].times do |x|
      row << x
      dimensions[:x].times do |y|
        row << [y,get_color,0, 1]
      end
      data << row
      row = []
    end
    return data
  end

  def get_color
    hex = ['0','3','6','9','c','f']
    color = ''
    3.times do
      color << hex.sample
    end
    return '_'+color
  end
end

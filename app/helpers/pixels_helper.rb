module PixelsHelper
  require 'bitcoin'
  include VanityHelper
  
  def prepare_pixesl_array(size)
    data = []
    row = []
    size.times do |x|
      row << x
      size.times do |y|
        row << [y,get_color,0, Bitcoin::Key.generate.addr]
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

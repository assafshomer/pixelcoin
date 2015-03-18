module PixelsHelper
  require 'bitcoin'
  include VanityHelper
  
  def prepare_pixels_grid(dimensions = PIXELS)
    grid = []
    column = []
    dimensions[:y].times do |y|
      column << y
      dimensions[:x].times do |x|
        column << [x,'bbb',0, 1]
      end
      grid << column
      column = []
    end
    return grid
  end

  def get_random_color
    hex = ['0','3','6','9','c','f']
    color = ''
    3.times do
      color << hex.sample
    end
    return color
  end
end

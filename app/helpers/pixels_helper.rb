module PixelsHelper
  require 'bitcoin'
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
    ['red','blue','green','black','white'].sample
  end
end

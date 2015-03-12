module StaticPagesHelper
  require 'bitcoin'
  def prepare_pixesl_array(size)
    data = []
    size.times do |x|
      size.times do |y|
        data << [x,y,'red',0, Bitcoin::Key.generate.addr]
      end
    end
    return data
  end
end

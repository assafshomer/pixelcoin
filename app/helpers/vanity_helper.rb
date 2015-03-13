module VanityHelper
  require "bitcoin"
  def get_vanity(color='aa', price='0', max_iter=100000)
    n=0
    num = 3
    begin
      key = Bitcoin::Key.generate
      pub = key.pub      
      data = pub[2..(num+1)]
      n +=1;
    end until (data == color+price) || n == max_iter
    return key unless n == max_iter
  end

end

module VanityHelper
  require "bitcoin"
  def get_vainty(number=3, max_iter=5000)
    n=0
    begin
      key = Bitcoin::Key.generate
      pub = key.pub
      num = 3
      data = pub[2..(2+num-1)]
      n +=1;
    end until data == 'a'*(num) || n == max_iter
    p "The winner is:" +key.pub + '| address: ['+key.addr+']'+ '| private key: ['+key.priv+']' unless n == max_iter
  end

end

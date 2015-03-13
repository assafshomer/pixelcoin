class StaticPagesController < ApplicationController
  
  include PixelsHelper

  def home
    @title='1000 Bitcoin'
    @pixels = prepare_pixesl_array(PIXELS)
  end

  def pixels
    @title='1000 Bitcoin'
    @pixels = prepare_pixesl_array(PIXELS)   
  end


end

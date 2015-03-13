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
  
  def vanity
    @color = params[:color]
    @vanity = get_vanity(@color,1)
  end


end

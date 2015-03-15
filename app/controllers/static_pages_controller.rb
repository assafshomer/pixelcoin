class StaticPagesController < ApplicationController
  
  include PixelsHelper

  def home
    @title = 'canvas'
    @pixels = prepare_pixesl_array(PIXELS)
  end

  def pixels
    @title = app_title
    @pixels = prepare_pixesl_array(PIXELS)   
  end
  
  def vanity
    @color = params[:color]
    @vanity = get_vanity(@color,'1')
  end


end

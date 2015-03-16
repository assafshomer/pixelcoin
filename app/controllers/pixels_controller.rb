class PixelsController < ApplicationController
  
  include PixelsHelper

  def home
    @title = 'canvas'
    @pixels = prepare_pixels_grid(PIXELS)
  end

  def pixels
    @title = app_title
    @pixels = prepare_pixels_grid(PIXELS)   
  end
  
  def vanity
    @color = params[:color]
    @vanity = get_vanity(@color,'1')
  end

  def save
    @x_min = params[:x_min]
    @y_min = params[:y_min]
    @x_max = params[:x_max]
    @y_max = params[:y_max]    
  end

end
class PixelsController < ApplicationController
  
  include PixelsHelper

  def home
    @title = 'canvas'
    @pixels = prepare_pixels_grid
  end

  def pixels
    @title = app_title
    @pixels = prepare_pixels_grid  
  end
  
  def vanity
    @color = params[:color]
    @vanity = get_vanity(@color,'1')
  end

  def save
    @x_min = params[:x_min].to_i
    @y_min = params[:y_min].to_i
    @x_max = params[:x_max].to_i
    @y_max = params[:y_max].to_i
    @num = (@x_max-@x_min+1)*(@y_max-@y_min+1)
  end

end
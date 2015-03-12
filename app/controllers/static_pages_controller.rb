class StaticPagesController < ApplicationController
  
  include StaticPagesHelper

  def home
    @title='1000 Bitcoin'
    @pixels = prepare_pixesl_array(PIXELS)
  end


end

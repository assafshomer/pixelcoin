require 'spec_helper'
include ViewsHelper

describe "Static" do
	subject { page }
  describe "App Home page" do
    before { visit pixels_path }    
    it { should have_title app_title }
   
  end

  
end 
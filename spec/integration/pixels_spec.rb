require 'spec_helper'
include ViewsHelper

describe "Pixels" do
	subject { page }
  describe "App Home page" do
    before { visit pixels_path }    
    it { should have_title app_title }
    it { should have_selector('div#billboard')}
    it { should have_selector('canvas#millionbits')}
    it { should have_xpath("//input[@id='x_min']") }
    it { should have_xpath("//input[@id='y_min']") }
    it { should have_xpath("//input[@id='x_max']") }
    it { should have_xpath("//input[@id='y_max']") }
    it { should have_button("save") }
  end

  
end 
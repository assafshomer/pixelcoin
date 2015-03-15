require 'spec_helper'
include ViewsHelper

describe "Static" do
	subject { page }
  describe "App Home page" do
    before { visit pixels_path }    
    it { should have_title app_title }
    it { should have_selector('div.billboard')}
    it { should have_selector('table.pixels')}
    it { should have_selector('td.pixel')}
  end

  
end 
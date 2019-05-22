class Api::V1::UsersController < ApplicationController

  def index
    @users = User.order("created_at DESC")
    render json: @users
  end

  def create
    @user = User.create(user_params)
    render json: @user
  end

  def destroy
    User.destroy(params[:id])
  end

  def update
    user = User.find(params[:id])
    user.update_attributes(user_params)
    render json: user
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  def new
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end


end

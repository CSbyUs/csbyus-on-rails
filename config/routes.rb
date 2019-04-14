Rails.application.routes.draw do
  resources :users
  root 'pages#index'

  # get  '/signup',  to: 'users#new'

  namespace :api do
    namespace :v1 do
      resources :comments, only: [:index, :create, :destroy, :update]
    end
  end

  match '*path', to: 'pages#index', via: :all


end

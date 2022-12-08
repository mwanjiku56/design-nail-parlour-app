Rails.application.routes.draw do
  
  
  resources :appointments
  resources :manicurists, only: [:index, :create]
  resources :reviews, only:[:index, :show, :create, :update]
  resources :customers, only:[:index, :show, :create]

  post "/signup", to: "customers#create"


  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

Rails.application.routes.draw do
  
  resources :appointments, only:[:index, :show, :create] 
  resources :manicurists, only: :index
  resources :reviews, only:[:update, :index, :show, :create]
  resources :customers
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

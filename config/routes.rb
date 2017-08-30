Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  resources :blogs, only: [:index, :create, :update, :show]
  resources :comments, only: [:index, :create, :destroy, :show, :update, :edit]
  resources :projects, only: [:index, :create, :destroy, :show, :update, :edit]
end

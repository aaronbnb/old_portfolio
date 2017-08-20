class BlogsController < ApplicationController

  def create
    @blog = Blog.new(blog_params)

    if @blog.save
      render :show
    else
      render json: @blog.errors
    end
  end

  def index
    @blogs = Blog.all
  end

  def show
    @blog = Blog.find(params[:id])
    render :show
  end

  def update
    @blog = Blog.find(params[:id])
    if @blog.update(blog_params)
      render :show
    else
      render json: @blog.error.full_messages
    end
  end

  def destroy
    blog = Blog.find(params[:id])
    blog.destroy
    render :index
  end

  private

  def blog_params
    params.require(:blog).permit(:title, :description, :body, :cover)
  end
end

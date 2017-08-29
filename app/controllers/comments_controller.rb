class CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render :show
    else
      render json: @comment.errors
    end
  end

  def show
    @comment = Comment.find(params[:id])
    render :show
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.update(comment_params)
      render :show
    else
      render json: @comment.error.full_messages
    end
  end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy
    render :index
  end

  private

  def comment_params
    params.require(:comment).permit(:title, :body, :author)
  end
end

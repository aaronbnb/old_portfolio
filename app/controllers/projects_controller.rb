class ProjectsController < ApplicationController

  def create
    @project = Project.new(project_params)

    if @project.save
      render :show
    else
      render json: @project.errors
    end
  end

  def index
    @projects = Project.all
  end

  def show
    @project = Project.find(params[:id])
    render :show
  end

  def update
    @project = Project.find(params[:id])
    if @project.update(project_params)
      render :show
    else
      render json: @project.error.full_messages
    end
  end

  def destroy
    project = Project.find(params[:id])
    project.destroy
    render :index
  end

  private

  def project_params
    params.require(:project).permit(:title, :thumbnail, :tagline,
                                    :languages, :description, :main_image)
  end
end

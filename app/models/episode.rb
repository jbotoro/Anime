# == Schema Information
#
# Table name: episodes
#
#  id             :bigint           not null, primary key
#  title          :string           not null
#  episode_number :integer          not null
#  description    :text             not null
#  show_id        :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Episode < ApplicationRecord
    validates :title, :episode_number, :description, :show_id, presence: true
    validates :title, uniqueness: true

    belongs to :season,
    foreign_key: :show_id,
    class_name: :Show


end

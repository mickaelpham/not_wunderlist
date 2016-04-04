class TodoSerializer < ActiveModel::Serializer
  attribute :title
  attribute :is_completed, key: 'is-completed'
end

import { Model } from '@vuex-orm/core';
import Like from '@/store/models/like';

class Comment extends Model {
  static entity = 'comments'

  static fields() {
    return {
      id: this.attr(null),
      post_id: this.attr(null),
      body: this.attr(''),
      post: this.belongsTo('posts'),
      likes: this.hasMany(Like),
    }
  }
}

export default Comment;
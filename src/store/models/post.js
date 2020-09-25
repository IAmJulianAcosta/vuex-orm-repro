import { Model } from '@vuex-orm/core';
import Comment from '@/store/models/comment';

class Post extends Model {
  static entity = 'posts'

  static fields () {
    return {
      id: this.attr(null),
      title: this.attr(''),
      body: this.attr(''),
      comments: this.hasMany(Comment, 'post_id'),
    }
  }
}

export default Post;
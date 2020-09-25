import { Model } from '@vuex-orm/core';

class Like extends Model {
  static entity = 'likes'

  static fields() {
    return {
      id: this.attr(null),
      post_id: this.attr(null),
      body: this.attr(''),
      post: this.hasOne('comments'),
    }
  }
}

export default Like;
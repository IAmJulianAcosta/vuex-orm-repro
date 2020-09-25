import VuexORM from "@vuex-orm/core";
import Post from '@/store/models/post';
import Comment from '@/store/models/comment';
import Like from '@/store/models/like';

console.log(1);

const database = new VuexORM.Database();

database.register(Post);
database.register(Comment)
database.register(Like)

export default database;
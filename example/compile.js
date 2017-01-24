import magu from 'magu';
import say from '../dist/magu-plugin-say';

magu({}, [say({
  icon: 'https://images.unsplash.com/photo-1433878665141-d6ceaf394ae2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&s=30f27c9f725e5ae6125609c3d2f1de6a'
})])
  .process(`${__dirname}/example.md`)
  .then(result => {
    console.log(result.html);
  });

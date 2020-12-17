mkdir
Make directory node

Parameters
name
children (optional, default [])
meta (optional, default {})
Examples
mkdir('etc');
// {
//   name: 'etc',
//   children: [],
//   meta: {},
//   type: 'directory',
// }

mkdir('etc', [mkfile('config'), mkfile('hosts')], { owner: 'user' });
// {
//   name: 'etc',
//   children: [
//     { name: 'config', meta: {}, type: 'file' },
//     { name: 'hosts', meta: {}, type: 'file' }
//   ],
//   meta: { owner: 'user' },
//   type: 'directory',
// }
mkfile
Make file node

Parameters
name
meta (optional, default {})
Examples
mkfile('config.json');
// {
//   name: 'config.json',
//   meta: {},
//   type: 'file',
// }

mkfile('config.json', { size: 1200 });
// {
//   name: 'config.json',
//   meta: { size: 1200 },
//   type: 'file',
// }
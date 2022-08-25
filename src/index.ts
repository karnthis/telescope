import { join } from 'path';
const { TelescopeBuilder } = require('@osmonauts/telescope');

// const protoDirs = [join(__dirname, '/../proto')];
const protoDirs = ['../proto/dsig'];
const outPath = join(__dirname, './done');
const telescope = new TelescopeBuilder({
  protoDirs,
  outPath

  // all options are totally optional ;)
  // options: {
  //   prototypes: {
  //     includePackageVar: false,
  //     typingsFormat: {
  //       useExact: false,
  //       timestamp: 'date',
  //       duration: 'duration'
  //     },
  //   },
  //   aminoEncoding: {
  //     enabled: true
  //   },
  //   lcdClients: {
  //     enabled: false
  //   },
  //   rpcClients: {
  //     enabled: false,
  //     camelCase: true
  //   }
  // }
})

  telescope.build().then(()=>{
  console.log('✨ all done!');
}).catch( (e: Error) =>{
  console.error(e);
  process.exit(1);
})
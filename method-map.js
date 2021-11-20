/*
Array.map()

Gunakan method method untuk mentransform data 
yang propertynya menggunakan snake_case menjadi camelCase
contoh:
{
  cancellation_time: '31-Jul-2021',
  category: 'Makanan & Minuman',
  shop_id: 6843180,
  shop_name: 'Apotek Kosambi',
  system_cancelled: 'Terlambat memasukkan resi yang valid',
}

dirubah menjadi
{
  cancellationTime: '31-Jul-2021',
  category: 'Makanan & Minuman',
  shopId: 6843180,
  shopName: 'Apotek Kosambi',
  systemCancelled: 'Terlambat memasukkan resi yang valid',
}


*/

const data = require('./data_mocks').mocks

function normalizeDataToCamelCase() {
  return;
}

normalizeDataToCamelCase(data)


console.log('-------------------')

/*
Array.map()

Gunakan method map untuk mereturn data yang berisikan
hanya invoice

contoh:
  const data = [
    {
      cancellation_time: '31-Jul-2021',
      category: 'Makanan & Minuman',
      invoice: 'INV/20210724/MPL/1436883675',
    },
    {
      cancellation_time: '20-Jul-2021',
      category: 'Makanan & Minuman',
      invoice: 'INV/20210824/MPL/1436883335',
    },
  ]
  
  menjadi:
  result = ['INV/20210724/MPL/1436883675', 'INV/20210824/MPL/1436883335']

*/

function getInvoice() {
  return;
}

getInvoice(data)
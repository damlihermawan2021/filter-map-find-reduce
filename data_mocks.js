const mocks = {
  api_code: 200,
  api_display_message: 'Success Fetch Data',
  api_raw_message: 'OK',
  api_result_data: {
    total_data: 2000,
    data: [
      {
        cancellation_time: '31-Jul-2021',
        category: 'Makanan & Minuman',
        shop_id: 6843180,
        shop_name: 'Apotek Kosambi',
        system_cancelled: 'Terlambat memasukkan resi yang valid',
        order_id: 869193144,
        invoice: 'INV/20210724/MPL/1436883675',
        refund_status: '',
        transaction_id: '3463698',
        is_eligible_cancel: true,
      },
      {
        cancellation_time: '31-Jul-2021',
        category: 'Makanan & Minuman',
        shop_id: 543549,
        shop_name: 'Apotek Kosambi',
        system_cancelled: 'Terlambat memasukkan resi yang valid',
        order_id: 660167540,
        invoice: 'INV/20210725/MPL/1439405945',
        refund_status: '',
        transaction_id: '3463697',
        is_eligible_cancel: false,
      },
      {
        cancellation_time: '31-Jul-2021',
        category: 'Makanan & Minuman',
        shop_id: 6799432,
        shop_name: 'Alfamart',
        system_cancelled: 'Terlambat memasukkan resi yang valid',
        order_id: 470229242,
        invoice: 'INV/20210726/MPL/1440595645',
        refund_status: '',
        transaction_id: '3463696',
        is_eligible_cancel: false,
      },
      {
        cancellation_time: '22-Jul-2021',
        category: 'Alat Kesehatan',
        shop_id: 6799444,
        shop_name: 'Apotek Hidayah',
        system_cancelled: 'Terlambat memasukkan resi yang valid',
        order_id: 870629233,
        invoice: 'INV/20210726/MPL/1440595644',
        refund_status: '',
        transaction_id: '333697',
        is_eligible_cancel: true,
      },
    ],
  },
};


module.exports = {
  mocks
}
let productBin = {
    "requestId": null,
    "data": [
      {
        "id": 100000057465,
        "storageId": 10000008207,
        "code": "A01-01-01-A",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 76,
        "createdTime": "2021-12-21T13:54:48Z",
      },
      {
        "id": 100000057466,
        "storageId": 10000002181,
        "code": "A01-01-01-B",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 71,
        "createdTime": "2021-12-21T13:54:48Z",
      },
      {
        "id": 100000065224,
        "storageId": 10000008884,
        "code": "Tgt00-A-A-01",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 10,
        "createdTime": "2022-02-08T10:35:19Z",
      }
    ],
    "message": "success"
  };
  
  function calculateTotalQuantity(productBin, productCode) {
    let totalQuantity = 0;
    let nameProduct = '';
    let codeProduct = '';
  
    productBin.data.forEach(item => {
      if (item.productCode === productCode) {
        totalQuantity += item.quantity;
        nameProduct = item.productName;
        codeProduct = item.productCode;
      }
    });
  
    return { totalQuantity, nameProduct, codeProduct }; // Mengembalikan total quantity, nama produk dan kode produk
  }
  
  const productCodeToCheck = "FBR00040101";
  const { totalQuantity, nameProduct, codeProduct } = calculateTotalQuantity(productBin, productCodeToCheck);
  console.log(`Total quantity dari berbagai storageId untuk kode produk ${codeProduct} (${nameProduct}) adalah sebanyak: ${totalQuantity} buah`);
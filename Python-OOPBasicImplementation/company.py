# Mehsullar modulunun yazılması
# name,price,info,amount,add_date,is_active
products=[]
id=1
class Product:
    def __init__(self,_id,_name,_price,_amount,_add_date,_is_active):
        self.Id=_id
        self.Name=_name
        self.Price=_price
        self.Amount=_amount
        self.Date=_add_date
        self.Status=_is_active
        
def addProduct():
    _p_name=input('Məhsul adını daxil edin : ')
    _p_price=float(input('Məhsul qiymətini daxil edin : '))
    _p_amount=int(input('Məhsul miqdarını daxil edin : '))
    _p_date=input('Məhsul tarixi daxil edin (il-ay-gün) : ')
    _p_status=input('Məhsul satışa verilsin mi (0 or 1) : ')
    global id
    product=Product(id,_p_name,_p_price,_p_amount,_p_date,_p_status)
    id+=1
    products.append(product)
def showProducts():
    for product in products:
        print(product.Id,product.Name,product.Price,product.Date)      
def deleteProduct():
    _slinecekOlanId=int(input('Silmək istədiyiniz məhsulin Id məlumatını daxil edin :'))
    for product in products:
        if product.Id== _slinecekOlanId:
            products.remove(product)
            showProducts()
def updateProduct():
    pass
    
while True:
    print("""
---------------------------------------
Kod 1:Yeni məhsul əlavə et
Kod 2:Bütün məhsulları gör
Kod 3:Məhsul sil
Kod 4:Məhsul məlumatını dəyiş
Kod 5:Proqramdan çıx
---------------------------------------""")
    
    emr=input('Görmək istədyinin əməlyatının kodunu daxil edin : ')
    if emr=='1':
        addProduct()
    elif emr=="2":
        showProducts()
    elif emr=="3":
        deleteProduct()
    elif emr=="4":
        updateProduct()
    elif emr=="5":
        break
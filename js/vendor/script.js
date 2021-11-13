//function sigup 
function signup() {
    // Get inputs values
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var pwd = document.getElementById('password').value;
    var confirmPwd = document.getElementById('confirmPassword').value;
    var tel = document.getElementById('tel').value;
    // Check firstname length
    var isFirstNameValid = verifLength(firstName, 3);
    // Display Error Msg
    displayErrorMsg("fNameErrorMsg", isFirstNameValid, "First Name must have at least 3 characters");

    var isLastNameValid = verifLength(lastName, 5);
    displayErrorMsg("lNameErrorMsg", isLastNameValid, "Last Name must have at least 5 characters");
    var isPwdValid = verifLength(pwd, 8);
    displayErrorMsg("pwdErrorMsg", isPwdValid, "Password must have at least 8 characters");
    var isEmailValid = verifEmail(email);
    displayErrorMsg("emailFormatErrorMsg", isEmailValid, "Invalid Email Format");
    var isEmailUnique = emailExists(email);
    displayErrorMsg("emailUniqueErrorMsg", !isEmailUnique, "Email exists");
    var isConfirmPwdMatch = compare(pwd, confirmPwd);
    displayErrorMsg("confirmPwdErrorMsg", isConfirmPwdMatch, "Confirm Pwd does not match Pwd");
    var idUser = JSON.parse(localStorage.getItem('idUserKey') || '1')
    // setUser into LS : firstName >=3, lastName>=5, Pwd>=8, email:format Valid, pwd == confirmPwd
    if (isFirstNameValid && isLastNameValid && isPwdValid && isEmailValid && isConfirmPwdMatch && !isEmailUnique) {
        // create user object
        var user = {
            id: idUser,
            fName: firstName,
            lName: lastName,
            email: email,
            pwd: pwd,
            confirmPwd: confirmPwd,
            tel: tel,
            role: 'user',
        };
        // Get all users from LS by key = users
        var usersTab = JSON.parse(localStorage.getItem('users') || '[]');
        // Insert user object into users array
        usersTab.push(user);
        // set users array into LS
        localStorage.setItem('users', JSON.stringify(usersTab));
        localStorage.setItem('idUserKey', idUser + 1);
        location.replace('login.html');
    }
}
//function verif length
function verifLength(ch, nbr) {
    // var test = false;
    // if (ch.length >= nbr) {
    //     test = true;
    // } 
    // return test;
    return (ch.length >= nbr);
}
//function reglexp (email)
function verifEmail(email) {
    const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExp.test(String(email).toLowerCase());
}
// function verif chaine exist
function compare(ch, ch1) {
    return (ch == ch1);
}
// function verif name by length
function verifName(name) {
    var verif = false;
    if (name.length > 3) { verif = true; }
    return verif;
}
//fuction check stock quantity price
function check(x) {
    return (x > 0);
}
//function check email exist
function emailExists(email) {
    // get all users from LS
    var users = JSON.parse(localStorage.getItem('users') || '[]');
    // users = [{email}, {email}, {email}]
    var userExists = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email == email) {
            userExists = true;
            break;
        }
    }
    return userExists;
}
// function return user by email and pwd
function searchUser(email, pwd) {
    var users = JSON.parse(localStorage.getItem('users') || '[]');
    var findedUser;
    for (var i = 0; i < users.length; i++) {
        if (users[i].email == email && users[i].pwd == pwd) {
            findedUser = users[i];
            break;
        }
    }
    return findedUser;
}
//function signupAdmin
function signupAdmin() {
    // Get inputs values
    var firstName = document.getElementById('firstNameAdmin').value;
    var lastName = document.getElementById('lastNameAdmin').value;
    var email = document.getElementById('emailAdmin').value;
    var pwd = document.getElementById('passwordAdmin').value;
    var confirmPwd = document.getElementById('confirmPasswordAdmin').value;
    var tel = document.getElementById('telAdmin').value;
    var fax = document.getElementById('fax').value;
    var address = document.getElementById('address').value;
    var companyId = document.getElementById('CompanyId').value;
    var companyName = document.getElementById('companyName').value;

    // Check firstname length
    var isFirstNameValid = verifLength(firstName, 3);
    // Display Error Msg
    displayErrorMsg("fNameErrorMsg", isFirstNameValid, "First Name must have at least 3 characters");

    var isLastNameValid = verifLength(lastName, 5);
    displayErrorMsg("lNameErrorMsg", isLastNameValid, "Last Name must have at least 5 characters");
    var isPwdValid = verifLength(pwd, 8);
    displayErrorMsg("pwdErrorMsg", isPwdValid, "Password must have at least 8 characters");
    var isEmailValid = verifEmail(email);
    displayErrorMsg("emailFormatErrorMsg", isEmailValid, "Invalid Email Format");
    var isEmailUnique = emailExists(email);
    displayErrorMsg("emailUniqueErrorMsg", !isEmailUnique, "Email exists");
    var isConfirmPwdMatch = compare(pwd, confirmPwd);
    displayErrorMsg("confirmPwdErrorMsg", isConfirmPwdMatch, "Confirm Pwd does not match Pwd");
    var iscompanyIdUnique = companyIdExists(companyId);
    displayErrorMsg("companyIdUniqueErrorMsg", !iscompanyIdUnique, "companyId exists");
    var iscompanyNameUnique = companyNameExists(companyName);
    displayErrorMsg("companyNameUniqueErrorMsg", !iscompanyNameUnique, "companyName exists");
    var idUser = JSON.parse(localStorage.getItem('idUserKey') || '1')
    // setUser into LS : firstName >=3, lastName>=5, Pwd>=8, email:format Valid, pwd == confirmPwd
    if (isFirstNameValid && isLastNameValid && isPwdValid && isEmailValid && isConfirmPwdMatch && !isEmailUnique) {
        // create user object
        var admin = {
            id: idUser,
            fName: firstName,
            lName: lastName,
            email: email,
            pwd: pwd,
            confirmPwd: confirmPwd,
            tel: tel,
            fax: fax,
            address: address,
            companyId: companyId,
            companyName: companyName,
            role: 'admin',
        };
        // Get all users from LS by key = users
        var usersTab = JSON.parse(localStorage.getItem('users') || '[]');
        // Insert user object into users array
        usersTab.push(admin);
        // set users array into LS
        localStorage.setItem('users', JSON.stringify(usersTab));
        localStorage.setItem('idUserKey', idUser + 1);
        location.replace('login.html');
    }
}
//companyIdExists
function companyIdExists(companyId) {
    // get all users from LS
    var users = JSON.parse(localStorage.getItem('users') || '[]');
    // users = [{email}, {email}, {email}]
    var companyIdExists = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].companyId == companyId) {
            companyIdExists = true;
            break;
        }
    }
    return companyIdExists;
}
//function companyNameExists
function companyNameExists(companyName) {
    // get all users from LS
    var users = JSON.parse(localStorage.getItem('users') || '[]');
    // users = [{email}, {email}, {email}]
    var companyNameExists = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].companyName == companyName) {
            companyNameExists = true;
            break;
        }
    }
    return companyNameExists;
}
//function displayErrorMsg
function displayErrorMsg(id, condition, msg) {
    if (condition) {
        document.getElementById(id).innerHTML = " ";
    } else {
        document.getElementById(id).innerHTML = msg;
        document.getElementById(id).style.color = 'red';
    }
}
//function login 
function login() {

    var email = document.getElementById('email').value;
    var pwd = document.getElementById('password').value;
    findedUser = searchUser(email, pwd);

    if (findedUser) {
        if (findedUser.role == "admin") {
            localStorage.setItem('connectedUserId', findedUser.id);
            location.replace('store.html');
        }
        else {
            localStorage.setItem('connectedUserId', findedUser.id);
            location.replace('shop.html');

        }

    } else {
        document.getElementById('loginMsgError').innerHTML = 'Please check Email/pwd';
        document.getElementById('loginMsgError').style.color = '#eb7371';
    }
}

//function filter category
function filterCategory(categoryName) {
    // get all users from LS
    var catogaryTab = JSON.parse(localStorage.getItem('catogaryTab')) || [];
    // users = [{email}, {email}, {email}]
    var categoryExists = false;
    for (let i = 0; i < catogaryTab.length; i++) {
        if (catogaryTab[i].name == categoryName) {
            categoryExists = true;
            break;
        }
    }
    return categoryExists;
}
//addCategory function that allows to save category into local Storage :category
function addCategory() {
    var categoryName = document.getElementById('name').value;
    var connectedUserId = localStorage.getItem('connectedUserId');
    var categoryId = JSON.parse(localStorage.getItem('catogaryIdKey') || 1);
    var categoryExists = filterCategory(categoryName);
    if (!(categoryExists)) {
        var category = {
            id: categoryId,
            name: categoryName,
            idUser: connectedUserId,
        }
        var catogaryTab = JSON.parse(localStorage.getItem('catogaryTab')) || [];
        catogaryTab.push(category);
        localStorage.setItem('catogaryTab', JSON.stringify(catogaryTab));
        localStorage.setItem('catogaryIdKey', categoryId + 1);
        location.replace('store.html')
    }
}
// generate  categories option
function generatoreOption() {

    var categorys = JSON.parse(localStorage.getItem('catogaryTab')) || [];
    var connectedUserId = localStorage.getItem('connectedUserId');
    var catalogueSelect = ``;

    for (let i = 0; i < categorys.length; i++) {
        if (connectedUserId == categorys[i].idUser) {
            catalogueSelect = catalogueSelect + `
        <option value="${categorys[i].name}">${categorys[i].name}</option>`;
        }
    }
    document.getElementById('categoryId').innerHTML = catalogueSelect;
}
//addProduct function that allows to save product into local Storage :product
function addProduct() {
    var name = document.getElementById('name').value;
    var price = document.getElementById('price').value;
    var stock = document.getElementById('stock').value;
    var categorie = document.getElementById('categoryId').value;

    var isverifName = verifName(name);
    if (!isverifName) {
        document.getElementById('NameMsgError').innerHTML = 'Please check Name';
        document.getElementById('NameMsgError').style.color = '#eb7371';
    }
    var isverifPrice = check(price);
    if (!isverifPrice) {
        document.getElementById('priceMsgError').innerHTML = 'Please check price';
        document.getElementById('priceMsgError').style.color = '#eb7371';
    }
    var isverifstock = check(stock);
    if (!isverifstock) {
        document.getElementById('stockMsgError').innerHTML = 'Please check Stock';
        document.getElementById('stockMsgError').style.color = '#eb7371';
    }
    var connectedUserId = localStorage.getItem('connectedUserId');
    var idProduct = JSON.parse(localStorage.getItem('iDProductKey') || '1');
    if (isverifstock) {

        var product = {
            id: idProduct,
            name: name,
            price: price,
            stock: stock,
            categorie: categorie,
            userId: connectedUserId,
            isCofirmedProduct: false,

        };
        var addproductTab = JSON.parse(localStorage.getItem('products') || '[]')
        addproductTab.push(product);
        localStorage.setItem('products', JSON.stringify(addproductTab));
        localStorage.setItem('iDProductKey', idProduct + 1);
    }
    else {
        alert("Error");
    }
}
//function get product by idUser
function getUserProduct(userId, productsTab) {
    var myProducts = [];
    for (let i = 0; i < productsTab.length; i++) {
        if (productsTab[i].userId == userId && productsTab[i].isCofirmedProduct == true) {
            myProducts.push(productsTab[i]);
        }
    }
    return myProducts;
}
//products Admin
function displayUserProducts() {
    var products = JSON.parse(localStorage.getItem('products') || '[]');
    // console.log(products);
    var connectedUserId = localStorage.getItem("connectedUserId");
    //console.log(connectedUserId);
    var myProducts = getUserProduct(connectedUserId, products);
    // console.log(myProducts);
    var productsDiv = ``;
    for (let i = 0; i < myProducts.length; i++) {
        productsDiv = productsDiv + ` 
        <div class="col-lg-3 col-md-6">
						<div class="single-product">
							<img class="img-fluid" src="img/product/p1.jpg" alt="">
							<div class="product-details">
								<h6>${myProducts[i].name}</h6>
								<div class="price">
									<h6>${myProducts[i].price}</h6>
									<h6 class="l-through">${myProducts[i].price - 65}</h6>
								</div>
                                <h6>${myProducts[i].categorie}</h6>
                                <h6>${myProducts[i].stock}</h6>
								<div class="prd-bottom">

									<div href="" class="social-info">
										<span class="ti-bag"></span>
										<button class=" btn hover-text" onclick="goToDisplayProduct(${myProducts[i].id})">info product</button>
									</div>
									<div href="" class="social-info">
										<span class="lnr lnr-heart"></span>
                                        <button class=" btn hover-text" onclick="deleteProduct(${i})">info product</button>
									</div>
									<a href="" class="social-info">
										<span class="lnr lnr-sync"></span>
										<p class="hover-text">compare</p>
									</a>
									<a href="" class="social-info">
										<span class="lnr lnr-move"></span>
										<p class="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>`
    }
    document.getElementById('myProductsId').innerHTML = productsDiv;
}
// return all products of connected user
function goToDisplayProduct(idProduct) {
    localStorage.setItem('selectedProductId', idProduct)
    location.replace("single-product.html");

}
//function search product by id
function serchProductById(idProduct) {
    // console.log('idProduct', idProduct);
    var products = JSON.parse(localStorage.getItem('products') || '[]');
    //console.log('products', products);
    var findedProduct;
    for (let i = 0; i < products.length; i++) {
        //   console.log('here');
        //  console.log(products[i].id, idProduct);
        if (products[i].id == idProduct) {
            findedProduct = products[i];
            break;

        }

    }
    // console.log('findedProduct', findedProduct);
    return findedProduct;
}
//afficher form edit
function displayEditForm() {
    var idProduct = localStorage.getItem('selectedProductId');
    var findedProduct = serchProductById(idProduct);
    var formEdit = `   
    <div class="row">

        <div class="col-lg-12">
            <div class="login_form_inner">
                <h3>Edit Product</h3>
                <div class="row login_form" id="contactForm" novalidate="novalidate">
                    <div class="col-md-12 form-group">
                        <input type="text" class="form-control" name="name" id='newPrice' placeholder='new Price' value=${findedProduct.price}>
                    </div>
                    <div class="col-md-12 form-group">
                    <input type="text" class="form-control" name="name"  id='newStock' placeholder='new Stock' value=${findedProduct.stock}>
                </div>
                    <div class="col-md-12 form-group">
                        <button type="submit" value="submit" class="primary-btn"
                            onclick= "validateEditProduct()">Validate Edit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    document.getElementById('editForm').innerHTML = formEdit;

}
// edit product par admin
function validateEditProduct() {
    var newPrice = document.getElementById('newPrice').value;
    var newStock = document.getElementById('newStock').value;
    var selectedProductId = localStorage.getItem('selectedProductId');
    var products = JSON.parse(localStorage.getItem('products'));
    for (let i = 0; i < products.length; i++) {
        if (selectedProductId == products[i].id) {
            products[i].price = newPrice;
            products[i].stock = newStock;
            break;
        }
    }
    localStorage.setItem('products', JSON.stringify(products));
    location.reload();
}
//delete Product
function deleteProduct(pos) {
    var products = JSON.parse(localStorage.getItem('products'));
    products.splice(pos, 1);
    localStorage.setItem('products', JSON.stringify(products));
    location.reload();

}
//affiche les produits a confirmer par super admin
function generatereProducts() {
    var products = JSON.parse(localStorage.getItem('products'));
    var productTable = ` `;
    var productTable = `
        <table class="table">
            <tr>
                <th>Name</th>
                <th> Price</th>
                <th>Stock</th>
                <th>Category</th>
                <th>Actions</th>`;
    for (let i = 0; i < products.length; i++) {
        productTable = productTable + `
        <tr>
                    <td>${products[i].name}</td>
                    <td>${products[i].price}</td>
                    <td>${products[i].stock}</td>
                    <td>${products[i].categorie}</td>
                    <td><button class="btn btn-danger "onclick="deleteProduct(${i})">Delete</button> </td>
                    <td><button class="btn btn-success"onclick="confimProdut(${products[i].id})">Confirm</button> </td>
                    </tr>`;
    }
    productTable = productTable + ` </table>`;
    document.getElementById('products').innerHTML = productTable;
}
//aficher User en page SuperAdmin
function generatereUsers() {
    var users = JSON.parse(localStorage.getItem('users'));
    var userTable = ` `;
    var userTable = `
        <table class="table">
            <tr>
                <th>Frist Name</th>
                <th>Last name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Tel</th>
                <th>Action</th> `;
    for (let i = 0; i < users.length; i++) {
        userTable = userTable + `
        <tr>
                    <td>${users[i].fName}</td>
                    <td>${users[i].lName}</td>
                    <td>${users[i].email}</td>
                    <td>${users[i].role}</td>
                    <td>${users[i].tel}</td>
                    <td><button class="btn btn-danger">Delete</button> </td>
                    </tr>`;
    }
    userTable = userTable + ` </table>`;
    document.getElementById('users').innerHTML = userTable;
}
// afficher les produits pour les cofirmation (super admin)
function confimProdut(id) {
    var products = JSON.parse(localStorage.getItem('products'));
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            products[i].isCofirmedProduct = true;
            break;
        }

    } localStorage.setItem('products', JSON.stringify(products));
}
//afficher tout les produit confirmé
function shopProducts() {
    var products = JSON.parse(localStorage.getItem('products'));
    var productsCofirmed = [];
    for (let i = 0; i < products.length; i++) {
        if (products[i].isCofirmedProduct = true) { productsCofirmed.push(products[i]); }

    }
    var productsDiv = ``;
    for (let i = 0; i < productsCofirmed.length; i++) {
        productsDiv += `
        <div class="col-lg-4 col-md-6">
        <div class="single-product">
            <img class="img-fluid" src="img/product/p4.jpg" alt="">
            <div class="product-details">
                <h6>${productsCofirmed[i].name}</h6>
                <div class="price">
                    <h6>${productsCofirmed[i].price}</h6>
                    <h6 class="l-through">${productsCofirmed[i].categorie}</h6>
                </div>
                <div class="prd-bottom">

                    <div class="social-info">
                        <span class="ti-bag"></span>
                        <button class="btn hover-text" onclick="goToDisplayProduct(${productsCofirmed[i].id})" style="backgournd-color:#fff">Display</button>
                    </div>
                    <div href="" class="social-info">
                        <span class="lnr lnr-heart"></span>
                        <button class="btn hover-text" onclick="addToWishList(${productsCofirmed[i].id})" style="backgournd-color:#fff">wishList</button>
                    </div>
                   
                    <a href="" class="social-info">
                        <span class="lnr lnr-move"></span>
                        <p class="hover-text">view more</p>
                    </a>
                </div>
            </div>
        </div>
    </div>`
    }

    document.getElementById('productsDiv').innerHTML = productsDiv;
}
//function search user by id
function serchUserById(idUser) {

    var users = JSON.parse(localStorage.getItem('users') || '[]');
    var findedUser;
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == idUser) {
            findedUser = users[i];
            break;
        }
    }
    return findedUser;
}
// single-product
function displayProductsUserInfo() {
    var connectedUserId = localStorage.getItem("connectedUserId");
    var findedUser = serchUserById(connectedUserId);
    var productInfoBloc = ``;
    console.log(findedUser.role);
    if (connectedUserId) {
        if (findedUser.role == 'admin') {
            productInfoBloc = `
                       <div class="s_product_text">
						<h3 id='prName'></h3>
						<h2 id='prPrice'>$</h2>
						<ul class="list">
							<li><a class="active" href="#"><span>Category:</span> <span id='prCategory'></span></a></li>
							<li><a href="#"><span>Availibility</span> : In Stock</a></li>
							<li><a href="#"><span>Quantité:</span> <span id="prStock"></span></a></li>
						</ul>
						<p>Mill Oil is an innovative oil filled radiator with the most modern technology. If you are
							looking for
							something that can make your interior look awesome, and at the same time give you the
							pleasant warm feeling
							during the winter.</p>
					
						<button class="btn btn-warning" onclick="displayEditForm()">Edit Product</button>
						<div id='editForm'></div>

					</div>`;
        }
        else {
            productInfoBloc = `
                      <div class="s_product_text">
                                <h3 id='prName'></h3>
                                <h2 id='prPrice'>$</h2>
        
                                <ul class="list">
                                    <li><a class="active" href="#"><span>Category:</span> <span id='prCategory'></span></a></li>
                                    <li><a href="#"><span>Availibility</span> : In Stock</a></li>
                                    <li><a href="#"><span>Quantité:</span> <span id="prStock"></span></a></li>
                                </ul>
                                <p>Mill Oil is an innovative oil filled radiator with the most modern technology. If you are
                                    looking for
                                    something that can make your interior look awesome, and at the same time give you the
                                    pleasant warm feeling
                                    during the winter.</p>
                                    <div class="col-md-12 form-group">
                                    <input type="text" class="form-control" id="quantity" placeholder='QUANTITY'>
                                </div>
                                <span id='qtyErrorMsg'><span>
                                    <div class="col-md-12 form-group">
                                        <button type="submit" value="submit" class="primary-btn"
                                            onclick= "validateOrder()">Reserve</button>
                                    </div>
        
                            </div>`;
        }
    }
    else {
        productInfoBloc = `
    <div class="s_product_text">
     <h3 id='prName'></h3>
     <h2 id='prPrice'>$</h2>
     <ul class="list">
         <li><a class="active" href="#"><span>Category:</span> <span id='prCategory'></span></a></li>
         <li><a href="#"><span>Availibility</span> : In Stock</a></li>
         <li><a href="#"><span>Quantité:</span> <span id="prStock"></span></a></li>
     </ul>
     <p>Mill Oil is an innovative oil filled radiator with the most modern technology. If you are
         looking for
         something that can make your interior look awesome, and at the same time give you the
         pleasant warm feeling
         during the winter.</p>
 
     <button class="btn btn-warning" onclick="goToLogin()">login</button>
 

 </div>`;
    }
    document.getElementById('infoProductAdmin').innerHTML = productInfoBloc;
}
//return login.html
function goToLogin() { location.replace('login.html'); }
// cree un order
function validateOrder() {
    var quantity = document.getElementById('quantity').value;
    var selectedProductId = localStorage.getItem('selectedProductId');
    var connectedUserId = localStorage.getItem("connectedUserId");
    var products = JSON.parse(localStorage.getItem('products'));
    var idOrder = JSON.parse(localStorage.getItem('idOrderKey') || '1');
    for (let i = 0; i < products.length; i++) {
        if ((quantity <= products[i].stock)) {
            products[i].stock = products[i].stock - quantity;
            console.log(products[i].stock);
            var order = {
                id: idOrder,
                idProduct: selectedProductId,
                idUser: connectedUserId,
                quantity: quantity,
                isCofirmedOrder: false,
            };
            var ordersTab = JSON.parse(localStorage.getItem('orders') || '[]')
            ordersTab.push(order);

        }
        else {
            document.getElementById('qtyErrorMsg').innerHTML = 'Univalide Qty';
            document.getElementById('qtyErrorMsg').style = 'red';
        }
    }
    localStorage.setItem('orders', JSON.stringify(ordersTab));
    localStorage.setItem('idOrderKey', idOrder + 1);
    location.reload();
    localStorage.setItem('products', JSON.stringify(products));
}
// confirmation order by admin
function confimOrder(id) {
    var orders = JSON.parse(localStorage.getItem('orders'));
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].id == id) {
            orders[i].isCofirmedOrder = true;
            break;
        }

    } localStorage.setItem('orders', JSON.stringify(orders));
}
//function search order by id
function getUserOrder(idUser, orders) {
    var myOrders = [];
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].idUser == idUser) {
            myOrders.push(orders[i]);
        }
    }
    return myOrders;
}
//afficher order User
function generateOrderUser() {
    var orders = JSON.parse(localStorage.getItem('orders') || '[]');
    console.log(orders);
    var connectedUserId = localStorage.getItem("connectedUserId");
    console.log(connectedUserId);
    var myOrders = getUserOrder(connectedUserId, orders);

    var totalAchat = 0;

    if (myOrders.length != 0) {
        var myOrdersTable = ` `;
        var myOrdersTable = `
    <table class="table">
        <tr>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">total</th>
            <th scope="col">Actions</th>
        </tr>`;
        for (let i = 0; i < myOrders.length; i++) {

            var findedProduct = serchProductById(myOrders[i].idProduct);
            var total = myOrders[i].quantity * findedProduct.price;
            var totalAchat = totalAchat + total;
            var totalAchat = totalAchat + myOrders[i].quantity * findedProduct.price;

            myOrdersTable = myOrdersTable + `
            <tr>
                <td>
                    <div class="media">
                        <div class="d-flex">
                            <img src="img/cart.jpg" alt="">
                        </div>
                        <div class="media-body">
                            <p>${findedProduct.name}</p>
                        </div>
                    </div>
                </td>
                <td>
                    <h5>${findedProduct.price}</h5>
                </td>
                <td>
                    <h5>${myOrders[i].quantity}</h5>
                </td>
                <td>
                    <h5>${total}</h5>
                </td>
                <td>`;
            if ((myOrders[i].isCofirmedOrder)) {
                myOrdersTable = myOrdersTable + `        
                <button class="btn btn-danger " 
               onclick="deleteOrderUpdate(${getObjectPositionById(myOrders[i].id, orders)},'orders',myOrders[i].idProduct,myOrders[i].qty)">Delete</button>
                </td>
               </tr>`}
            else {
                myOrdersTable = myOrdersTable + `        
                <h6>order is confirmed</h6>
               </td>
              </tr>`};
        }
        myOrdersTable = myOrdersTable + `
            <tr>
            <td>

            </td>
            <td>

            </td>
            <td>
                <h5>Subtotal</h5>
            </td>
            <td>
                <h5>${totalAchat}</h5>
            </td>
        </tr>
        <tr class="shipping_area">
            <td>

            </td>
            <td>

            </td>
            <td>
                <h5>Shipping:</h5>
            </td>
            <td>
               ${shippingPrice(totalAchat)} 
            </td>
        </tr> `;
    }

    else { myOrdersTable = `<div class='text-center'><h2>No Reserved Products</h2></div>`; }
    myOrdersTable = myOrdersTable + ` </table > `;
    document.getElementById('myOrders').innerHTML = myOrdersTable;

}

function shippingPrice(price) { return (price >= 300) ? 'free' : '$7' }

//function search product by id
function getProductById(id) {
    var products = JSON.parse(localStorage.getItem('products') || '[]');
    var findedProduct = [];
    for (let i = 0; i < products.length; i++) {

        if (products[i].userId == id) {
            findedProduct.push(products[i]);

        }

    }
    // console.log('findedProduct', findedProduct);
    return findedProduct;
}
//afficher les orders by admin
function generateOrderAdmin() {
    var orders = JSON.parse(localStorage.getItem('orders') || '[]');
    var connectedUserId = localStorage.getItem("connectedUserId");
    var findedProduct = getProductById(connectedUserId);

    var adminOrders = [];
    for (let i = 0; i < findedProduct.length; i++) {
        for (let j = 0; j < orders.length; j++) {
            if (orders[j].idProduct == findedProduct[i].id)
                adminOrders.push(orders[j]);
        }
    }
    console.log(adminOrders);
    var ordersTable = ` `;
    ordersTable += `
    <table class="table">
                        <tr>
                            
                            <th scope="col">Client</th>
                            <th scope="col">Product</th>
                             <th scope="col">Quantity</th>
                            <th scope="col">TotalPrice</th>
                            <th scope="col">Actions</th>
                            <tr>`;
    for (let i = 0; i < adminOrders.length; i++) {
        var findedProduct = serchProductById(adminOrders[i].idProduct);
        console.log(findedProduct)
        var findedUser = serchUserById(adminOrders[i].idUser);
        console.log(findedUser);
        ordersTable += `
                        <tr>

                                <td>${findedUser.fName} ${findedUser.lName}</td>
                                <td>${findedProduct.name}</td>
                                 <td>${adminOrders[i].quantity}</td>
                                <td>${findedProduct.price * adminOrders[i].quantity}</td>
                                <td><button class="btn btn-danger " onclick="deleteObject(${i})">Delete</button>`;
        if (!(adminOrders[i].isCofirmedOrder)) {
            ordersTable += `<button class="btn btn-success" onclick="confimOrder(${adminOrders[i].id})">Validate</button> </td>
                            </tr>`;
        }
        else { ordersTable += `<h6> order confirmed</h6>  </tr>`; }

    }
    ordersTable = ordersTable + ` </table>`;
    document.getElementById('ordersAdmin').innerHTML = ordersTable;
}
// profil d'utilisateur
function profileUser() {
    var connectedUserId = localStorage.getItem("connectedUserId");
    var profile = serchUserById(connectedUserId);
    var formEdit = `   
    <div class="row">
        <div class="col-lg-12">
            <div class="login_form_inner">
                <h3>Edit Profile</h3>
                <div class="row login_form" id="contactForm" novalidate="novalidate">
                    <div class="col-md-12 form-group">
                        <input type="text" class="form-control"  id='newEmail' placeholder='new Email' value=${profile.email}>
                    </div>
                    <div class="col-md-12 form-group">
                    <input type="text" class="form-control" id='newTel' placeholder='new Tel' value=${profile.tel}>
                </div>
                    <div class="col-md-12 form-group">
                        <button type="submit" value="submit" class="primary-btn"
                            onclick= "validateEditProfile()">Validate Edit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    document.getElementById('editForm').innerHTML = formEdit;

}
//modifier les parametres des profil
function validateEditProfile() {
    var newEmail = document.getElementById('newEmail').value;
    var newTel = document.getElementById('newTel').value;
    var connectedUserId = localStorage.getItem("connectedUserId");

    var users = JSON.parse(localStorage.getItem('users'));
    for (let i = 0; i < users.length; i++) {
        if (connectedUserId == users[i].id) {
            users[i].email = newEmail;
            users[i].tel = newTel;
            break;
        }
    }
    localStorage.setItem('users', JSON.stringify(users));
    location.reload();
}
//deconnexion
function logout() {

    localStorage.removeItem('connectedUserId')
    location.reload();
}
//navigateur dynamique
function setHeader() {
    var connectedUserId = localStorage.getItem("connectedUserId");

    var headerDiv = '';
    if (connectedUserId) {
        var profile = serchUserById(connectedUserId);
        if (profile.role == "admin") {
            headerDiv = `
            <ul class="nav navbar-nav menu_nav ml-auto">
            <li class="nav-item "><a class="nav-link" href="index.html">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="profile.html">${profile.fName}</a></li>
           
                 <li class="nav-item"><a class="nav-link" href="store.html">Store </a></li>
                 <li class="nav-item"><a class="nav-link" href="wishlist.html">WishList</a></li>
                 <li class="nav-item"><a class="nav-link" href="search.html" >Search</a></li>
                 <li class="nav-item"><a class="nav-link" onclick="logout()" >Logout</a></li> 
            </ul> 
         <ul class="nav navbar-nav navbar-right">
         <li class="nav-item">
         <button class="search"><span class="lnr lnr-magnifier" id="search"></span></button>
        </li>
        </ul>`
        }

        else {
            var orders = JSON.parse(localStorage.getItem('orders') || '[]');
            var myOrders = getUserOrder(connectedUserId, orders);
            var wishListTab = JSON.parse(localStorage.getItem('wishlist') || '[]');
            var myWishList = getUserWishList(connectedUserId, wishListTab);
            headerDiv = `<ul class="nav navbar-nav menu_nav ml-auto">
           
          <li class="nav-item"><a class="nav-link" href="profile.html">${profile.fName}</a></li>
         <li class="nav-item "><a class="nav-link" href="home.html">Home</a></li>

         <li class="nav-item"><a class="nav-link" href="shop.html">Shop </a></li>
        
         <li class="nav-item"><a class="nav-link" href="basket1.html">basket(${myOrders.length})</a></li>
         <li class="nav-item"><a class="nav-link" href="wishlist.html">WishList(${myWishList.length})</a></li>
         <li class="nav-item"><a class="nav-link" href="search.html" >Search</a></li>
         <li class="nav-item"><a class="nav-link" onclick="logout()" >Logout</a></li>
           
</ul> 
 <ul class="nav navbar-nav navbar-right">
<li class="nav-item"><a href="#" class="cart"><span class="ti-bag"></span></a></li>
<li class="nav-item">
 <button class="search"><span class="lnr lnr-magnifier" id="search"></span></button>
</li>
</ul>`}
    }
    else {
        headerDiv = `<ul class="nav navbar-nav menu_nav ml-auto">
       
           
           <li class="nav-item "><a class="nav-link" href="home.html">Home</a></li>
           
             <li class="nav-item"><a class="nav-link" href="shop.html">Shop </a></li>
              <li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li>
               
                <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                <li class="nav-item"><a class="nav-link" href="search.html" >Search</a></li>
                <li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>
                <li class="nav-item submenu dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                 aria-expanded="false">Signup</a>
                <ul class="dropdown-menu">
                    <li class="nav-item"><a class="nav-link" href="customresignup.html">User</a></li>
                    <li class="nav-item"><a class="nav-link" href="storesignup.html">Admin</a></li>
                </ul>
            </li>
                  
    </ul> 
        <ul class="nav navbar-nav navbar-right">
  
    <li class="nav-item">
        <button class="search"><span class="lnr lnr-magnifier" id="search"></span></button>
    </li>
</ul>`}
    document.getElementById('navbarSupportedContent').innerHTML = headerDiv;
}
//return my wishlist
function getUserWishList(id, wishListTab) {
    var myWishList = [];
    for (let i = 0; i < wishListTab.length; i++) {
        if (wishListTab[i].userId == id) {
            myWishList.push(wishListTab[i]);
        }
    } return myWishList;
}
//ajouter au favourite 
function addToWishList(id) {
    var connectedUserId = localStorage.getItem('connectedUserId');
    var wishListId = JSON.parse(localStorage.getItem('idWishListKey') || '1');


    var wishList = {
        id: wishListId,
        idProduct: id,
        userId: connectedUserId
    };
    var wishlistTab = JSON.parse(localStorage.getItem('wishlist') || '[]')
    wishlistTab.push(wishList);
    localStorage.setItem('wishlist', JSON.stringify(wishlistTab));
    localStorage.setItem('idWishListKey', wishListId + 1);
    location.replace('wishlist.html');
}
//afficher les liste des favoris 
function dispalywishList() {
    var connectedUserId = localStorage.getItem("connectedUserId");
    var wishListTab = JSON.parse(localStorage.getItem('wishlist') || '[]')
    var myWishList = getUserWishList(connectedUserId, wishListTab)
    var wishListTable = ``;
    wishListTable += `
    <table class="table">
                        <tr>
                            
                          
                            <th scope="col">Product</th>
                             <th scope="col">price</th>
                            <th scope="col">Category</th>
                            <th scope="col">Actions</th>
                            <tr>`;
    for (let i = 0; i < myWishList.length; i++) {

        var findedProduct = serchProductById(myWishList[i].idProduct);
        wishListTable += `
        <tr>

                <td>${findedProduct.name}</td>
                <td>${findedProduct.price}</td>
                 <td>${findedProduct.categorie}</td>
                <td> <button class="btn btn-success " 
                onclick="goToDisplayProduct(${findedProduct.id})">validate</button>
                <button class="btn btn-danger "
                onclick="deleteObjet(${getObjectPositionById(myWishList[i].id, wishListTab)},'wishlist')" >Delete</button>
              </td>
            </tr>`;
    }
    wishListTable = wishListTable + ` </table>`;
    document.getElementById('wishListTable').innerHTML = wishListTable;

}
//delete object
function deleteObjet(pos, key) {
    var object = JSON.parse(localStorage.getItem(key) || '[]');
    object.splice(pos, 1);
    localStorage.setItem(key, JSON.stringify(object));
    location.reload();

}
// function position object
function getObjectPositionById(id, tab) {


    for (let i = 0; i < tab.length; i++) {
        console.log(tab[i])
        if (id == tab[i].id) {
            var pos = i;
            break;
        }
        console.log(pos)
    }
    return pos;
}

//aficher toutes les orders page super admin
function ordersOffSuperAdmin() {
    var orders = JSON.parse(localStorage.getItem('orders') || '[]');
    var orderTable = ` `;
    var orderTable = `
        <table class="table">
            <tr>
                <th>Number</th>
                <th>Client</th>
                <th>Quantity</th>
                <th>Actions</th>`;
    for (let i = 0; i < orders.length; i++) {
        // var findedProduct = serchProductById(orders[i].idProduct);

        var findedUser = serchUserById(orders[i].idUser);
        console.log(findedUser)

        orderTable = orderTable + `
                    <tr>
                                <td>${orders[i].id}</td>
                                <td>${findedUser.fName} ${findedUser.lName}</td>
                               
                                <td>${orders[i].quantity}</td>
                                <td><button class="btn btn-danger "onclick="deleteObject(${i})">Delete</button> </td>
                                <td><button class="btn btn-success"onclick="">Confirm</button> </td>
                                </tr>`;
    } orderTable = orderTable + ` </table>`;
    document.getElementById('orders').innerHTML = orderTable;
}
//delete and update order
function deleteOrderUpdate(pos, key, idProduct, qty) {
    var object = JSON.parse(localStorage.getItem(key) || '[]');
    object.splice(pos, 1);
    localStorage.setItem(key, JSON.stringify(object));
    var products = JSON.parse(localStorage.getItem('products') || '[]');
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == idProduct) {
            products.stock += Number(qty);
            break;
        }

    } localStorage.setItem('products', JSON.stringify(products));
    location.reload();
}
//faire un recherche par nom du produit 
function searchByName() {
    var products = JSON.parse(localStorage.getItem('products') || '[]');
    var serchName = document.getElementById('productSerch').value;
    console.log(serchName)

    for (let i = 0; i < products.length; i++) {
        console.log(products[i])
        if (products[i].name == serchName) {

            var serchDiv = ``;
            serchDiv = serchDiv + ` 
            <div class="col-lg-3 col-md-6">
                            <div class="single-product">
                                <img class="img-fluid" src="img/product/p1.jpg" alt="">
                                <div class="product-details">
                                    <h6>${products[i].name}</h6>
                                    <div class="price">
                                        <h6>${products[i].price}</h6>
                                        <h6 class="l-through">${products[i].price}</h6>
                                    </div>
                                    <h6>${products[i].categorie}</h6>
                                    <div class="prd-bottom">
    
                                        <div href="" class="social-info">
                                            <span class="ti-bag"></span>
                                            <button class=" btn hover-text">info product</button>
                                        </div>
                                        <div href="" class="social-info">
                                            <span class="lnr lnr-heart"></span>
                                            <button class=" btn hover-text">info product</button>
                                        </div>
                                        <a href="" class="social-info">
                                            <span class="lnr lnr-sync"></span>
                                            <p class="hover-text">compare</p>
                                        </a>
                                        <a href="" class="social-info">
                                            <span class="lnr lnr-move"></span>
                                            <p class="hover-text">view more</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>`
        }
        document.getElementById('SerchProducts').innerHTML = serchDiv;
    }

}
//function of checkout
function checkout() {
    var firstName = document.getElementById('first').value;
    var lastName = document.getElementById('last').value;
    var company = document.getElementById('company').value;
    var email = document.getElementById('email').value;
    var country = document.getElementById('country').value;
    var phoneNumber = document.getElementById('number').value;
    var addressLine1 = document.getElementById('add1').value;
    var addressLine2 = document.getElementById('add2').value;
    var city = document.getElementById('city').value;
    var district = document.getElementById('district').value;
    var postCode = document.getElementById('postCode').value;
    var OrderNotes = document.getElementById('message').value;
    var paymentMethod = document.getElementsByName('selector').value;

    // Check firstname length
    // var isFirstNameValid = verifLength(firstName, 3);
    // Display Error Msg
    /*displayErrorMsg("fNameErrorMsg", isFirstNameValid, "First Name must have at least 3 characters");
 
    var isLastNameValid = verifLength(lastName, 5);
    displayErrorMsg("lNameErrorMsg", isLastNameValid, "Last Name must have at least 5 characters");
    var isCompanyValid = verifLength(company, 8);
    displayErrorMsg("pwdErrorMsg", isPwdValid, "Password must have at least 8 characters");
    var isEmailValid = verifEmail(email);
    displayErrorMsg("emailFormatErrorMsg", isEmailValid, "Invalid Email Format");
    var isEmailUnique = emailExists(email);
    displayErrorMsg("emailUniqueErrorMsg", !isEmailUnique, "Email exists");
    var isConfirmPwdMatch = compare(pwd, confirmPwd);
    displayErrorMsg("confirmPwdErrorMsg", isConfirmPwdMatch, "Confirm Pwd does not match Pwd");
   
    // setUser into LS : firstName >=3, lastName>=5, Pwd>=8, email:format Valid, pwd == confirmPwd*/
    //if (isFirstNameValid && isLastNameValid && isPwdValid && isEmailValid && isConfirmPwdMatch && !isEmailUnique) {
    // create user object
    var connectedUserId = localStorage.getItem("connectedUserId");
    var idInfo = JSON.parse(localStorage.getItem('idInfoKey') || '1');
    var infoUser = {
        id: idInfo,
        idUser: connectedUserId,
        fName: firstName,
        lName: lastName,
        company: company,
        email: email,
        country: country,
        phoneNumber: phoneNumber,
        addressLine1: addressLine1,
        addressLine2: addressLine2,
        city: city,
        district: district,
        postCode: postCode,
        OrderNotes: OrderNotes,
        paymentMethod: paymentMethod,

    };
    // Get all users from LS by key = users
    var infoUserTable = JSON.parse(localStorage.getItem('informations') || '[]');
    // Insert user object into users array
    infoUserTable.push(infoUser);
    // set users array into LS
    localStorage.setItem('informations', JSON.stringify(infoUserTable));
    localStorage.setItem('idInfoKey', idInfo + 1);
    location.replace('confirmation.html');
}
//les informations sur produits
function infoProductOrder() {
    var orders = JSON.parse(localStorage.getItem('orders') || '[]');
    var connectedUserId = localStorage.getItem("connectedUserId");
    var myOrders = getUserOrder(connectedUserId, orders);
    var totalAchat = 0;
    if (myOrders.length != 0) {
        var myOrdersTable = ` `;
        var myOrdersTable = `
        <div class="order_box">
        <h2>Your Order</h2>
        <ul class="list">
            <li><a href="#">Product<span>Total</span></a></li>`;
        for (let i = 0; i < myOrders.length; i++) {

            var findedProduct = serchProductById(myOrders[i].idProduct);
            var total = myOrders[i].quantity * findedProduct.price;
            totalAchat = totalAchat + total;

            myOrdersTable = myOrdersTable + `
            <li><a href="#">${findedProduct.name}
            <span class="middle">x${myOrders[i].quantity}</span>
            <span class="last">$${total}</span></a></li>`;
        }
        myOrdersTable = myOrdersTable + `    
        <ul class="list list_2">
            <li><a href="#">Subtotal <span>$${totalAchat}</span></a></li>
            <li><a href="#">Shipping <span>Flat rate:${ShippingPrice(totalAchat)} </span></a></li>
        </ul>
        <div class="payment_item">
            <div class="radion_btn">
                <input type="radio" id="f-option5" name="selector">
                <label for="f-option5">Check payments</label>
                <div class="check"></div>
            </div>
            <p>Please send a check to Store Name, Store Street, Store Town, Store State /
                County,
                Store Postcode.</p>
        </div>
        <div class="payment_item active">
            <div class="radion_btn">
                <input type="radio" id="f-option6" name="selector">
                <label for="f-option6">Paypal </label>
                <img src="img/product/card.jpg" alt="">
                <div class="check"></div>
            </div>
            <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal
                account.</p>
        </div>

        <div class="primary-btn" onclick="checkout()">Proceed to Paypal</div>
    </div>`;
    } else { myOrdersTable = `<div class='text-center'><h2>No Reserved Products</h2></div>`; }
    document.getElementById('boxOrder').innerHTML = myOrdersTable;
}
// les information d'utilisateur
function getInfoUserById(id) {
    var infoUserTable = JSON.parse(localStorage.getItem('informations') || '[]');
    var myInfoUser;
    for (let i = 0; i < infoUserTable.length; i++) {

        if (infoUserTable[i].idUser == id) {
            myInfoUser = infoUserTable[i];

        }

    }

    return myInfoUser;
}
// page confirmation order 
function cofirmation() {

    var connectedUserId = localStorage.getItem("connectedUserId");
    var myInfo = getInfoUserById(connectedUserId);

    var confirmationDiv = ``;
    confirmationDiv = `
    <div class="row order_d_inner">
    <div class="col-lg-4">
        <div class="details_item">
            <h4>Order Info</h4>
            <ul class="list">
                <li><a href="#"><span>Order number</span> :${myInfo.id}</a></li>
                <li><a href="#"><span>Date</span> :${myInfo.country}</a></li>
                <li><a href="#"><span>Total</span> : USD 2210</a></li>
                <li><a href="#"><span>Payment method</span> :${myInfo.paymentMethod}</a></li>
            </ul>
        </div>
    </div>
    <div class="col-lg-4">
        <div class="details_item">
            <h4>Billing Address</h4>
            <ul class="list">
                <li><a href="#"><span>Street</span> : ${myInfo.id}</a></li>
                <li><a href="#"><span>City</span> :${myInfo.city}</a></li>
                <li><a href="#"><span>Country</span> :${myInfo.country}</a></li>
                <li><a href="#"><span>Postcode </span> :${myInfo.postCode}</a></li>
            </ul>
        </div>
    </div>
    <div class="col-lg-4">
        <div class="details_item">
            <h4>Shipping Address</h4>
            <ul class="list">
                <li><a href="#"><span>Street</span> ${myInfo.id}</a></li>
                <li><a href="#"><span>City</span> :${myInfo.city}</a></li>
                <li><a href="#"><span>Country</span> :${myInfo.country}</a></li>
                <li><a href="#"><span>Postcode </span> : ${myInfo.postCode}</a></li>
            </ul>
        </div>
    </div>
</div>`;
    document.getElementById('infoUser').innerHTML = confirmationDiv;
}
//afficher les orders confirmé
function myOrders() {
    var orders = JSON.parse(localStorage.getItem('orders') || '[]');
    var connectedUserId = localStorage.getItem("connectedUserId");
    var myOrders = getUserOrder(connectedUserId, orders);
    var totalAchat = 0;
    var myOrderstab = ``;
    myOrderstab += `
       
            <table class="table">
               
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                    </tr>`;
    for (let i = 0; i < myOrders.length; i++) {

        var findedProduct = serchProductById(myOrders[i].idProduct);
        var total = myOrders[i].quantity * findedProduct.price;
        totalAchat = totalAchat + total;
        myOrderstab += `
                <tr>
                    <td>
                        <p>${findedProduct.name}</p>
                    </td>
                    <td>
                        <h5>${myOrders[i].quantity}</h5>
                    </td>
                    <td>
                        <p>$${total}</p>
                    </td>
                </tr>`;
    }
    myOrderstab += `
                     <tr>
                    <td>
                        <h4>Subtotal</h4>
                    </td>
                    <td>
                        <h5></h5>
                    </td>
                    <td>
                        <p>$${totalAchat}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h4>Shipping</h4>
                    </td>
                    <td>
                        <h5></h5>
                    </td>
                    <td>
                        <p>${ShippingPrice(totalAchat)} </p>
                    </td>
                </tr>`;
    myOrderstab = myOrderstab + ` </table>`;
    document.getElementById('cofirmationOrdresTable').innerHTML = myOrderstab;
}
function getProductByCategory(categoryName) {
    var products = JSON.parse(localStorage.getItem('products') || '[]');
    var findedProduct = [];

    for (let i = 0; i < products.length; i++) {

        if (products[i].categorie == categoryName) {
            findedProduct.push(products[i]);

        }

    }
    // console.log('findedProduct', findedProduct);
    return findedProduct;
}
//afficher page recherche par categorie
function browseCategory() {
    var catogaryTab = JSON.parse(localStorage.getItem('catogaryTab')) || [];
    var categoryList = ``;
    for (let i = 0; i < catogaryTab.length; i++) {
        var findedProduct = getProductByCategory(catogaryTab[i].name);

        categoryList += ` 
      <li class="main-nav-list"><a data-toggle="collapse" href=' ProductByCategory(${catogaryTab[i].name})'
              aria-expanded="false" aria-controls="fruitsVegetable"><span
                  class="lnr lnr-arrow-right"></span>${catogaryTab[i].name}<span
                  class="number">(${findedProduct.length})
                  </span></a>
      </li> `;
    } document.getElementById('categoryList').innerHTML = categoryList;
}
// classer les produits
function ProductByCategory(categoryName) {
    var findedProduct = getProductByCategory(categoryName);
    console.log(findedProduct)
    var productCategoryDiv = ``;
    for (let i = 0; i < findedProduct.length; i++) {
        productCategoryDiv += `
            <div class="col-lg-4 col-md-6">
            <div class="single-product">
                <img class="img-fluid" src="img/product/p4.jpg" alt="">
                <div class="product-details">
                    <h6>${findedProduct[i].name}</h6>
                    <div class="price">
                        <h6>${findedProduct[i].price}</h6>
                        <h6 class="l-through">${findedProduct[i].categorie}</h6>
                    </div>
                    <div class="prd-bottom">
    
                        <div class="social-info">
                            <span class="ti-bag"></span>
                            <button class="btn hover-text" onclick="goToDisplayProduct(${findedProduct[i].id})" style="backgournd-color:#fff">Display</button>
                        </div>
                        <div href="" class="social-info">
                            <span class="lnr lnr-heart"></span>
                            <button class="btn hover-text" onclick="addToWishList(${findedProduct[i].id})" style="backgournd-color:#fff">wishList</button>
                        </div>
                       
                        <a href="" class="social-info">
                            <span class="lnr lnr-move"></span>
                            <p class="hover-text">view more</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>`;
    }

    document.getElementById('productCategoryDiv ').innerHTML = productCategoryDiv;
}
//afficher PRODUCT by super admin
function managementProducts() {
    var products = JSON.parse(localStorage.getItem('products'));
    var productTable = ` `;
    var productTable = `
        <table class="table">
            <tr>
                <th>Name</th>
                <th> Price</th>
                <th>Stock</th>
                <th>Category</th>
                <th>Actions</th>`;
    for (let i = 0; i < products.length; i++) {
        productTable = productTable + `
        <tr>
                    <td>${products[i].name}</td>
                    <td>${products[i].price}</td>
                    <td>${products[i].stock}</td>
                    <td>${products[i].categorie}</td>
                    <td><input type="checkbox"  onclick="checkbok(${[i]})"></td>
                    
                    </tr>`;
    } productTable = productTable + `<td><button class="btn btn-success"onclick="cofirmCheckBox()">Confirm</button>  
    <button class="btn btn-danger ms-5"onclick="deleleCheckProduct()">Delete</button></td></table>`;

    document.getElementById('products').innerHTML = productTable;
}
//checkbox input
function checkbok(pos) {
    var checkBoxTab = JSON.parse(localStorage.getItem(' checkBoxTab ') || '[]')
    checkBoxTab.push(pos);
    localStorage.setItem(' checkBoxTab ', JSON.stringify(checkBoxTab));
    console.log(checkBoxTab);
}
//supprime product by super Admin
function deleleCheckProduct() {
    var products = JSON.parse(localStorage.getItem('products') || '[]');
    var checkBoxTab = JSON.parse(localStorage.getItem(' checkBoxTab ') || '[]')
    for (let i = 0; i < checkBoxTab.length; i++) {
        products.splice(checkBoxTab[i], 1);
    }
    localStorage.setItem('products', JSON.stringify(products));
    localStorage.removeItem('checkBoxTab ')
    location.reload();
    console.log(checkTab)

}
//cofirmation by super Admin
function cofirmCheckBox() {
    var products = JSON.parse(localStorage.getItem('products') || '[]');
    var checkBoxTab = JSON.parse(localStorage.getItem(' checkBoxTab ') || '[]')
    for (let i = 0; i < checkBoxTab.length; i++) {
        products[checkBoxTab[i]].isCofirmedProduct = true;
        console.log(products[checkBoxTab[i]])
    }
    localStorage.setItem('products', JSON.stringify(products));
    localStorage.removeItem(checkBoxTab);
    location.reload();

}
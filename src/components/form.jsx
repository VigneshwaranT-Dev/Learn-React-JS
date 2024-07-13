export function Form(){
    
    function submitForm(e){
        e.preventDefault();
        console.log('Form Submitted');
    }
    return(
        <div className="container">
            <div className="row my-3">
                <div className="col-md-12">
                    <div>
                        <h3>
                            Customer
                        </h3>
                    </div>
                    <hr />
                    <form onSubmit={submitForm}>
                        <div className="row">
                            <div className="col-md-6">
                                <strong>Customer Data:</strong>
                            </div>
                            <div className="col-md-6">
                                <strong>Account:</strong>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-6">
                                <label htmlFor="inputName">
                                    Name:
                                </label>
                                <input className="form-control" type="text" name="inputName" id="name" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputCusAccountGroup">
                                    Customer Account Group:
                                </label>
                                <input className="form-control" type="text" name="inputCusAccountGroup" id="cusAccountGroup" />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <label htmlFor="inputMiddleName">
                                    Middle Name:
                                </label>
                                <input className="form-control" type="text" name="inputMiddleName" id="middleName" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputSuppAccountGroup">
                                    Supplier Account Group:
                                </label>
                                <input className="form-control" type="text" name="inputSuppAccountGroup" id="suppAccountGroup" />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <label htmlFor="inputLastName">
                                    Last Name:
                                </label>
                                <input className="form-control" type="text" name="inputLastName" id="lastName" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputId">
                                    ID:
                                </label>
                                <input className="form-control" type="text" name="inputId" id="Id" />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <label htmlFor="inputCountry">
                                    Country:
                                </label>
                                <input className="form-control" type="text" name="inputCountry" id="country" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputContact">
                                    Contact:
                                </label>
                                <input className="form-control" type="text" name="inputContact" id="contact" />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label htmlFor="inputPostalCode">
                                            Postal Code:
                                        </label>
                                        <input className="form-control" type="text" name="inputPostalCode" id="postalCode" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputCity">
                                            City:
                                        </label>
                                        <input className="form-control" type="text" name="inputCity" id="city" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputPhone">
                                    Phone:
                                </label>
                                <input className="form-control" minLength="1"  maxLength="10" type="text" name="inputPhone" id="phone" />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-8">
                                        <label htmlFor="inputStreet">
                                            Street:
                                        </label>
                                        <input className="form-control" type="text" name="inputStreet" id="street" />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="inputNo">
                                            No:
                                        </label>
                                        <input className="form-control" type="text" name="inputNo" id="no" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 d-grid gap-2">
                                <button className="btn btn-primary mt-4 btn-block" type="submit">
                                    Click to Submit
                                </button>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <label htmlFor="inputPhoneNumber">
                                    Phone Number:
                                </label>
                                <input className="form-control" type="text" maxLength={10} name="inputPhoneNumber" id="phoneNumber" />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <label htmlFor="inputPhoneNumber2">
                                    Phone Number 2:
                                </label>
                                <input className="form-control" type="text" name="inputPhoneNumber2" id="phoneNumber2" />
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-6">
                                <strong>Other Details:</strong>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <label htmlFor="inputPurchaseOrder">
                                    Purchase Order:
                                </label>
                                <input className="form-control" type="text" name="inputPurchaseOrder" id="purchaseOrder" />
                            </div>
                        </div>
                        <div className="row my-3">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-7">
                                        <label htmlFor="inputDate">
                                            Vaild From Date/Time:
                                        </label>
                                        <input className="form-control" type="date" name="inputDate" id="date" />
                                    </div>
                                    <div className="col-md-5">
                                        <label htmlFor="inputTime">
                                            
                                        </label>
                                        <input className="form-control" type="text" name="inputTime" id="time" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
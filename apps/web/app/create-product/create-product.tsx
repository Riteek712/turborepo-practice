import createProduct from "./actions/create-product";

export default async function CreateProduct () {
    return (
        <div>
            <form action={createProduct}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name"/>
                </div>
                <div>
                    <label htmlFor="price">Prince:</label>
                    <input type="text" name="price" id="price" />
                </div>
                <button type="submit">
                    ADD
                </button>
            </form>
        </div>
    )
}
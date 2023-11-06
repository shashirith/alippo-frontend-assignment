<div align="center">
<h1 align="center">
<img style="width: 100px" src="https://cdn.blume.vc/blume/imager/images/startups/alippo/logo/47/alippo.f1670267327_5dbced9873927dbc00aa1bed763f6f2b.webp" width="100" />
<br>Alippo
</h1>
<p> 
    <h1>Assignment Details</h1>
    <ul align='left'>
        <li>In this project, I developed a web application using React, JavaScript (with TypeScript), and leveraged the power of Tailwind CSS for styling, as well as Radix UI for enhancing the user interface. The main objective of this assignment was to create a dynamic dashboard that retrieves and displays data from an external API source. I focused on ensuring a seamless user experience by handling null and empty data cases gracefully. The project's codebase is well-structured, readable, and maintains high code quality, following best practices. To facilitate understanding, I provided a comprehensive README with information on folder structure and important project pointers. The GitHub repository is publicly accessible, allowing for easy review and assessment. This project showcases my proficiency in React, API integration, state management, and UI development while emphasizing developer-friendly practices.</li><br>
    </ul>
</p>
<h3>Developed with the software and tools below</h3>

<p align="center">
<img style="width: 30px" src="https://img.icons8.com/?size=1x&id=108784&format=png" />
<img style="width: 30px" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" />
<img style="width: 30px" src="https://img.icons8.com/?size=48&id=CIAZz2CYc6Kc&format=png" />
<img style="width: 30px" src="https://img.icons8.com/?size=48&id=dJjTWMogzFzg&format=png" />

</p>
</div>

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shashirith/alippo-frontend-assignment
2. Go to the project folder
   ```sh
   cd alippo-frontend-assignment
   ```
3. Install packages with npm
   ```sh
   npm i
   ```
4. Start  your applicatoin using
   ```sh
   npm run dev
   ```

## 📍 Overview

My project is a React-based web application that utilizes JavaScript and Tailwind CSS to present data from an external API in an intuitive dashboard. The emphasis is on code quality, readability, and an enhanced user experience, with Radix UI playing a key role in crafting intuitive interface components.

---


# Components

## DeleteButton

The `DeleteButton` component is used to trigger a delete action within a dialog. It contains the following elements:
<div align="center">
<img width="441" alt="Screenshot 2023-11-06 at 7 15 22 PM" src="https://github.com/shashirith/alippo-frontend-assignment/assets/76678053/1bf405d1-e19e-4c44-8856-38c8d1c45c1d">
</div>

- `Dialog.Root`: The root component of the dialog.
- `Dialog.Trigger`: A button that triggers the dialog.
- `Dialog.Content`: The content of the dialog, including a title and buttons.
- `Dialog.Title`: The title of the dialog.
- `Button`: A button element, which can be used to trigger the delete action.
- `Dialog.Close`: A component used to close the dialog.
  
Example usage:
```jsx
<DeleteButton handleDelete={handleDelete} index={index} />
```
# EditButton Component 

The `EditButton` component is used to trigger an edit action within a dialog. This README provides an overview of the `EditButton` component and its usage.
<div align="center">
<img width="451" alt="Screenshot 2023-11-06 at 7 15 13 PM" src="https://github.com/shashirith/alippo-frontend-assignment/assets/76678053/41b99bd6-188c-4a0b-83a4-57048fb6a47c">
</div>

## Component Elements

The `EditButton` component consists of the following elements:

1. `Dialog.Root`: The root component of the dialog.
2. `Dialog.Trigger`: A button that triggers the dialog.
3. `Dialog.Content`: The content of the dialog, including a title, an input field, and buttons.
4. `Dialog.Title`: The title of the dialog.
5. `TextField.Input`: An input field for editing.
6. `Button`: Buttons for saving and canceling the edit action.
7. `Dialog.Close`: A component used to close the dialog.

# TableBody Component

The `TableBody` component is responsible for rendering the body of a table. It maps over a list of data and creates table rows for each item. This README provides an overview of the `TableBody` component and its usage.

## Component Elements

The `TableBody` component consists of the following elements:

1. `Table.Body`: The body of the table.
2. `Table.Row`: A row within the table.
3. `Table.Cell`: Cells within the table.
4. `EditButton`: The EditButton component.
5. `DeleteButton`: The DeleteButton component.

## Example Usage

You can use the `TableBody` component as shown in the following example:

```jsx
<TableBody data={data} setName={setName} handleSave={handleSave} handleDelete={handleDelete} />
```
# TableHeader Component README

The `TableHeader` component is responsible for rendering the header of the table. It defines the table column headers. This README provides an overview of the `TableHeader` component and its usage.

## Component Elements

The `TableHeader` component consists of the following elements:

1. `Table.Header`: The header of the table.
2. `Table.Row`: A row within the table.
3. `Table.ColumnHeaderCell`: Cells within the table header.

## Example Usage

You can use the `TableHeader` component as shown in the following example:

```jsx
<TableHeader />
```

## Example Usage

You can use the `EditButton` component as shown in the following example:

```jsx
<EditButton item={item} index={index} setName={setName} handleSave={handleSave} />
```
#Website Preview
<div align="center">
    <img width="1007" alt="Screenshot 2023-11-06 at 7 12 37 PM" src="https://github.com/shashirith/alippo-frontend-assignment/assets/76678053/f6e7c1f2-ce61-45db-a0f6-279d2e995ad0">
</div>
## 👏 Acknowledgments

- I would like to express my gratitude to alippo for providing me with this amazing opportunity. Through this assignment, I have had the chance to learn a great deal. I am eagerly looking forward to working at SendX and tackling similar problems that can have a real impact on the world.

[**Return**](#Top)

---

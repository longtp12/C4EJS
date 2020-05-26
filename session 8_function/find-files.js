let images = {
  name: "images",
  isFolder: true,
  content: [
    {
      name: "background.jpg",
      isFolder: false,
      content: [],
    },
    {
      name: "forceground.jpg",
      isFolder: false,
      content: [],
    },
    {
      name: "my travel",
      isFolder: true,
      content: [
        {
          name: "ha noi",
          isFolder: true,
          content: [
            {
              name: "pho-co.jpg",
              isFolder: false,
              content: [],
            },
            {
              name: "ho-guom.jpg",
              isFolder: false,
              content: [],
            },
          ],
        },
        {
          name: "check-in.jpg",
          isFolder: false,
          content: [],
        },
      ],
    },
  ],
};

function find_files(object, keyword) {
  if (object.isFolder === false) {
    if (object.name.search(keyword) >= 0) {
      console.log(object.name);
    }
  } else {
    for (const childObject of object.content) {
      find_files(childObject, keyword);
    }
  }
}

find_files(images, "c");

let allFilesAndFolders = [];
allFilesAndFolders.push(images);

while(allFilesAndFolders.length > 0){
    let object = allFilesAndFolders.shift;
    if(object.isFolder === false){
        if(object.name.search(keyword) >= 0){
            console.log(object.name);
            
        }
    }else{
        allFilesAndFolders = allFilesAndFolders.concat(object.content);
    }
}

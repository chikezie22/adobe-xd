function encode(username, password) {
  return btoa(`${username}:${password}`);
}

async function fetchData() {
  const username = "coalition";
  const password = "skills-test";
  const credentials = encode(username, password);

  try {
    // Step 1: Make the API call with authentication
    const response = await fetch(
      "https://fedskillstest.coalitiontechnologies.workers.dev/",
      {
        headers: {
          Authorization: `Basic ${credentials}`,
        },
      }
    );
    const data = await response.json();
    // Extract and display a specific object
    const specificObject = data.find((item) => item.name === "Jessica Taylor"); // Adjust the condition as needed
    displaySpecificObject(specificObject);
    console.log(specificObject);

    // function to displaySpecific Object
    function displaySpecificObject(item) {
      const third = document.getElementById("third");
      const imageDiv = document.createElement("div");
      imageDiv.className = "mt-4";
      const imageElement = document.createElement("img");
      imageElement.src = item.profile_picture;
      imageDiv.appendChild(imageElement);

      const nameElement = document.createElement("h3");
      nameElement.textContent = item.name;

      const group = document.createElement("div");
      group.classList.add("self-start");
      group.className = "mt-10";

      const dobDiv = document.createElement("div");
      dobDiv.classList.add("flex", "self-start", "p-4", "flex-col", "gap-2");
      const dob = document.createElement("p");
      dob.textContent = "Date of Birth";
      const dobUser = document.createElement("h4");
      dobUser.textContent = item.date_of_birth;
      console.log(dobUser);
      dobDiv.append(dob, dobUser);

      const genderDiv = document.createElement("div");
      genderDiv.classList.add("flex", "p-4", "flex-col", "gap-2");
      const gender = document.createElement("p");
      gender.textContent = "Gender";
      const genderUser = document.createElement("h4");
      genderUser.textContent = item.gender;
      //   console.log(dobUser);
      genderDiv.append(gender, genderUser);

      group.append(dobDiv, genderDiv);

      third.appendChild(imageDiv);
      third.appendChild(nameElement);
      third.appendChild(group);
      //   third.appendChild(dobDiv);
      //   third.appendChild(genderDiv);
    }

    // Step 2: Loop through the data and create HTML elements
    const container = document.getElementById("data-container");
    data.forEach((item) => {
      // Step 3: Create HTML elements for each object
      const itemElement = document.createElement("div");
      itemElement.classList.add("flex", "gap-4", "mb-4");

      const imageElement = document.createElement("img");
      imageElement.src = item.profile_picture; // Assuming each object has a 'title' property
      imageElement.style.width = "44px";
      imageElement.style.height = "44px";

      const groupElement = document.createElement("div");

      const nameElement = document.createElement("h4");
      nameElement.textContent = item.name;

      const genderElement = document.createElement("p");
      genderElement.textContent = item.gender; // Assuming each object has a 'description' property

      groupElement.appendChild(nameElement);
      groupElement.appendChild(genderElement);

      // Step 4: Append the elements to the container
      itemElement.appendChild(imageElement);
      itemElement.appendChild(groupElement);
      //   itemElement.appendChild(nameElement);
      //   itemElement.appendChild(genderElement);
      container.appendChild(itemElement);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the function to fetch and display the data
fetchData();

// chart
const ctx = document.getElementById("myChart").getContext("2d");

const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Dataset 1",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.1,
      },
      {
        label: "Dataset 2",
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: "rgba(153, 102, 255, 1)",
        tension: 0.1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

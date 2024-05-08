const taskName = document.getElementById("task-name"),
taskDesc = document.getElementById("task-desc"),
taskNameMsg = document.getElementById("task-name-msg"),
taskDescMsg = document.getElementById("task-desc-msg"),
taskViewSection = document.getElementById("task-view-section");

let tasks = [];

function createTask() {
	let isNameValid = false, isDescValid = false;

	if (taskName.value.length == 0) {
		taskNameMsg.innerHTML = "Task name cannot be empty";
		taskNameMsg.style = "color: red; font-weight: bold";
	} else {
		taskNameMsg.innerHTML = "Looks good";
		taskNameMsg.style = "color: green; font-weight: bold";
		isNameValid = true;
	}

	if (taskDesc.value.length == 0) {
		taskDescMsg.innerHTML = "You must write some description";
		taskDescMsg.style = "color: red; font-weight: bold";
	} else {
		taskDescMsg.innerHTML = "Awesome!";
		taskDescMsg.style = "color: green; font-weight: bold";
		isDescValid = true;
	}

	if (isNameValid && isDescValid) {
		let task = {
			"name": taskName.value,
			"desc": taskDesc.value
		}

		let index = tasks.length;
		tasks.push(task);
		showTasks(task, index);
	}
}

function showTasks(t, i) {
	let htmlStr = `<div class="task">
		<button class="delete-btn" data-index=${i} onclick="deleteTask(event)">x</button>
		<p class="task-name">${t.name}</p>
		<hr/>
		<p class="task-desc">${t.desc}</p>
	</div>`;
	taskViewSection.innerHTML = taskViewSection.innerHTML+htmlStr;
}

function deleteTask(e) {
	let index = e.target.getAttribute("data-index");
	tasks.splice(index, 1);

	taskViewSection.innerHTML = "";
	let i = 0;
	for (; i < tasks.length; i++) {
		let htmlStr = `<div class="task">
			<button class="delete-btn" data-index=${i} onclick="deleteTask(event)">x</button>
			<p class="task-name">${tasks[i].name}</p>
			<hr/>
			<p class="task-desc">${tasks[i].desc}</p>
		</div>`;

		taskViewSection.innerHTML = taskViewSection.innerHTML+htmlStr
	}
}
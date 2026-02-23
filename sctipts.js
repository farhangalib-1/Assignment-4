const jobCircular = document.getElementById('alljobcirculars')
const totalCount = document.getElementById('totalcount1')
const interviewCount = document.getElementById('interviewcount1')
const rejectCount = document.getElementById('rejectedcount1')
let interviewList = []
let rejectList = []
const jobBtn = document.getElementById('allbtn')
const interviewBtn = document.getElementById('interviewbtn')
const rejectBtn = document.getElementById('rejectedbtn')
const mainContainer = document.getElementById('maincontainer')
const filterSection = document.getElementById('filter-section')
let currentPosition =  'all'
const noJob = document.getElementById('nojob');





// count the total job, interview and rejected
function countJob(){
    totalCount.innerText = jobCircular.children.length
    interviewCount.innerText = interviewList.length
    rejectCount.innerText = rejectList.length
}
countJob()

// button toggling effect
function toggleStyle(id){
   jobBtn.classList.remove('bg-[#3B82F6]' ,'text-white')
   interviewBtn.classList.remove('bg-[#3B82F6]' ,'text-white')
   rejectBtn.classList.remove('bg-[#3B82F6]' ,'text-white')
   jobBtn.classList.add('text-[#64748B]')
   interviewBtn.classList.add('text-[#64748B]')
   rejectBtn.classList.add('text-[#64748B]')
   const selectedBtn = document.getElementById(id)
   currentPosition = id;
   selectedBtn.classList.add('bg-[#3B82F6]' ,'text-white')
    if(id === 'allbtn'){
        filterSection.classList.add('hidden')  
        jobCircular.classList.remove('hidden')
    }
   if(id === 'interviewbtn'){
    filterSection.classList.remove('hidden')
    jobCircular.classList.add('hidden')
    noJob.classList.remove('hidden')
    addToInterviewList()
   }
   if(id === 'rejectedbtn'){
    filterSection.classList.remove('hidden')
    jobCircular.classList.add('hidden')
    addToRejectedList()
   }
   if(interviewList.length > 0 ){
    noJob.classList.add('hidden')
}
 if(rejectList.length > 0 ){
    noJob.classList.add('hidden')
}
    if(interviewList.length === 0 || rejectList.length === 0){
        noJob.classList.remove('hidden')
    }
}

mainContainer.addEventListener('click', function(event){
    if(event.target.classList.contains('interview1')){
    const parentNode = event.target.parentNode
    const jobName = parentNode.querySelector('.jobname').innerText
    const jobTitle = parentNode.querySelector('.jobtile').innerText
    const jobType = parentNode.querySelector('.jobtype').innerText
    const status = parentNode.querySelector('.notapplied').innerText
    const jobDetails = parentNode.querySelector('.jobdetails').innerText
    const interviewBtn1 = parentNode.querySelector('.interview1').innerText
    const rejectBtn1 = parentNode.querySelector('.rejected1').innerText

    parentNode.querySelector('.notapplied').innerText = 'INTERVIEW'
    parentNode.querySelector('.notapplied').classList.remove('bg-[#EEF4FF]', 'text-[#002C5C]')
    parentNode.querySelector('.notapplied').classList.add('bg-[#10B981]', 'text-white')
     parentNode.querySelector('.notapplied').classList.remove('bg-[#EF4444]', 'text-white')
        parentNode.querySelector('.notapplied').classList.add('bg-[#10B981]', 'text-white')
    
    const jobInfo = {
        jobName, 
        jobTitle, 
        jobType, 
        status: 'INTERVIEW',
        jobDetails, 
        interviewBtn1, 
        rejectBtn1
    }

  const jobExists = interviewList.find(job=> job.jobName === jobInfo.jobName)
  
  
  if(!jobExists){
    interviewList.push(jobInfo)
  }

  rejectList = rejectList.filter(job=> job.jobName !== jobInfo.jobName)
  if(currentPosition === 'rejectedbtn'){
        addToRejectedList()
    }
  countJob()
    }

    else if(event.target.classList.contains('rejected1')){
    const parentNode = event.target.parentNode
    const jobName = parentNode.querySelector('.jobname').innerText
    const jobTitle = parentNode.querySelector('.jobtile').innerText
    const jobType = parentNode.querySelector('.jobtype').innerText
    const status = parentNode.querySelector('.notapplied').innerText
    const jobDetails = parentNode.querySelector('.jobdetails').innerText
    const interviewBtn1 = parentNode.querySelector('.interview1').innerText
    const rejectBtn1 = parentNode.querySelector('.rejected1').innerText
    parentNode.querySelector('.notapplied').innerText = 'REJECTED'
    parentNode.querySelector('.notapplied').classList.remove('bg-[#EEF4FF]', 'text-[#002C5C]')
    parentNode.querySelector('.notapplied').classList.add('bg-[#EF4444]', 'text-white')
    
    const jobInfo = {
        jobName, jobTitle, jobType, status: 'REJECTED', jobDetails, interviewBtn1, rejectBtn1
    }

  const jobExists = rejectList.find(job=> job.jobName === jobInfo.jobName)

  if(!jobExists){
    rejectList.push(jobInfo)
  }
  interviewList = interviewList.filter(job=> job.jobName !== jobInfo.jobName)

    if(currentPosition === 'interviewbtn'){
        addToInterviewList()
    }
  countJob()
    }
   
})

function addToInterviewList(){
filterSection.innerHTML = ''
    for(const job of interviewList){
        console.log(job);
        
let div = document.createElement('div')
div.className = 'cards mx-auto shadow-sm rounded-lg p-6 mt-4'
div.innerHTML = `
<h1 class="text-[#002C5C] text-[16px] font-bold mb-1 jobname">${job.jobName}</h1>
                <p class="text-[#64748B] mb-5 jobtile">${job.jobTitle}</p>
                <p class="text-[#64748B] mb-5 jobtype">${job.jobType}</p>
               <button class="px-2 py-3 bg-[#EEF4FF] text-[#002C5C] mb-2 rounded-sm font-medium cursor-pointer notapplied" id="notapplied3">${job.status}</button>
                <p class="mb-5 jobdetails">${job.jobDetails}</p>
                <button class="border-2 text-[#10B981] border-[#10B981] px-2 py-3 rounded-sm mr-2 font-semibold cursor-pointer interview1" id="interview1">INTERVIEW</button>
                <button class="border-2 px-2 py-3 rounded-sm text-[#EF4444] border-[#EF4444] font-semibold cursor-pointer rejected1" id="rejected1">REJECTED</button>
`
filterSection.appendChild(div)
    }
}
function addToRejectedList(){
filterSection.innerHTML = ''
    for(const job of rejectList){
        console.log(job);
        
let div = document.createElement('div')
div.className = 'cards mx-auto shadow-sm rounded-lg p-6 mt-4'
div.innerHTML = `
<h1 class="text-[#002C5C] text-[16px] font-bold mb-1 jobname">${job.jobName}</h1>
                <p class="text-[#64748B] mb-5 jobtile">${job.jobTitle}</p>
                <p class="text-[#64748B] mb-5 jobtype">${job.jobType}</p>
               <button class="px-2 py-3 bg-[#EEF4FF] text-[#002C5C] mb-2 rounded-sm font-medium cursor-pointer notapplied" id="notapplied3">${job.status}</button>
                <p class="mb-5 jobdetails">${job.jobDetails}</p>
                <button class="border-2 text-[#10B981] border-[#10B981] px-2 py-3 rounded-sm mr-2 font-semibold cursor-pointer interview1" id="interview1">INTERVIEW</button>
                <button class="border-2 px-2 py-3 rounded-sm text-[#EF4444] border-[#EF4444] font-semibold cursor-pointer rejected1" id="rejected1">REJECTED</button>
`
filterSection.appendChild(div)
    }
}
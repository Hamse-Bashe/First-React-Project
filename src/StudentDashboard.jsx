import React, { useState } from "react";

const StudentDashboard = () => {

  const courses = [
    {
      id: 1,
      name: "React Fundamentals",
      progress: 75,
      instructor: "Sarah Wilson",
      nextLesson: "Components & Props",
      color: "blue",
    },
    {
      id: 2,
      name: "JavaScript Advanced",
      progress: 45,
      instructor: "Mike Johnson",
      nextLesson: "Async/Await",
      color: "purple",
    },
    {
      id: 3,
      name: "UI/UX Design",
      progress: 90,
      instructor: "Emily Chen",
      nextLesson: "Color Theory",
      color: "pink",
    },
  ];

  const assignments = [
    {
      id: 1,
      title: "Build a Todo App",
      course: "React Fundamentals",
      dueDate: "2024-03-20",
      status: "pending",
    },
    {
      id: 2,
      title: "API Integration",
      course: "JavaScript Advanced",
      dueDate: "2024-03-18",
      status: "completed",
    },
    {
      id: 3,
      title: "Design System",
      course: "UI/UX Design",
      dueDate: "2024-03-25",
      status: "in-progress",
    },
  ];

  const announcements = [
    {
      id: 1,
      title: "New Course Available",
      message: "Check out our new TypeScript course!",
      time: "2 hours ago",
    },
    {
      id: 2,
      title: "Maintenance Notice",
      message: "Platform updates scheduled for tonight",
      time: "5 hours ago",
    },
  ];

  const stats = [
    { label: "Average Grade", value: "88%", icon: "📊" },
    { label: "Courses", value: "3", icon: "📚" },
    { label: "Study Hours", value: "45h", icon: "⏰" },
    { label: "Assignments", value: "12", icon: "✍️" },
  ];

  const handleStatus = (status) => {
    switch (status) {
      case "pending":
        return "text-red-600 bg-red-100";
      case "in-progress":
        return "text-yellow-600 bg-yellow-100";
      case "completed":
        return "text-green-600 bg-green-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* header */}
        <div className="flex justify-between rounded-xl items-center bg-white p-6 mb-6 shadow-sm hover:shadow-md transition-shadow">
          <div>
            <h2 className="text-gray-800 text-xl font-bold">
              Welcome back, Student!
            </h2>
            <p className="text-gray-500">
              Here's what's happening with your courses today.
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-2xl">🔔</span>
            <span className="py-2 px-4 text-white text-xl font-bold rounded-full bg-gradient-to-r from-indigo-500 to-pink-500">
              S
            </span>
          </div>
        </div>

        {/* stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white px-4 py-6 rounded-xl flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-2xl">{stat.icon}</div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {stat.label}
                </p>
                <h2 className="text-xl text-gray-800 font-bold">
                  {stat.value}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* courses */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white md:col-span-2 rounded-xl p-4">
            <h2 className="text-md font-semibold text-gray-800 mb-4">
              Course Progress
            </h2>
            <div className="space-y-4">
              {courses.map((course) => (
                <div key={course.id} className="bg-gray-100 p-4 rounded-xl">
                  <div className="flex justify-between mb-2">
                    <h2 className="text-gray-800 text-sm font-medium">
                      {course.name}
                    </h2>
                    <p className="text-gray-500 text-xs font-medium">
                      {course.progress}%
                    </p>
                  </div>
                  <div className="p-1 bg-gray-200 rounded-full mb-2"><div className={`p-1 bg-green-500 ${course.progress > 50 ? `w-3/4` : `w-2/4`} ${course.progress === 90 && `w-9/10`} rounded-full`}></div></div>
                  <div className="flex justify-between">
                    <p className="text-gray-500 text-sm font-medium">
                      Next: {course.nextLesson}
                    </p>
                    <p className="text-gray-500 text-sm font-medium">
                      {course.instructor}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-white p-4 rounded-xl mb-6">
              <h2 className="text-md font-semibold text-gray-800 mb-4">
                Upcoming Assignments
              </h2>
              <div>
                {assignments.map((assignment) => (
                  <div key={assignment.id} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <p className="text-gray-800 text-sm font-medium">
                        {assignment.title}
                      </p>
                      <span
                        className={`${handleStatus(assignment.status)} text-xs font-medium px-2 py-1 rounded-full`}
                      >
                        {assignment.status}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 text-xs font-medium">
                        {assignment.course}
                      </span>
                      <span className="text-gray-500 text-xs font-medium">
                        {assignment.dueDate}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl">
              <h2 className="text-md font-semibold text-gray-800 mb-4">
                Announcements
              </h2>
              <div>
                {announcements.map((announcement) => (
                  <div
                    key={announcement.id}
                    className="pl-4 border-l-4 border-sky-600 rounded mb-4"
                  >
                    <h2 className="text-gray-800 text-sm font-medium">
                      {announcement.title}
                    </h2>
                    <p className="text-gray-500 text-sm ">
                      {announcement.message}
                    </p>
                    <span className="text-gray-500 text-xs">
                      {announcement.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;

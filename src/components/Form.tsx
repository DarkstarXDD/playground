export default function Form() {
  return (
    <form className="grid w-full max-w-sm gap-6">
      <div className="grid gap-2">
        <label htmlFor="title">Post Title</label>
        <input
          type="text"
          name="title"
          id="title"
          className="px-4 py-2 text-black outline-offset-4 outline-blue-500"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="content">Post Content</label>
        <textarea
          name="content"
          id="content"
          className="px-4 py-2 text-black outline-blue-500"
        />

        <button className="bg-slate-400 px-4 py-2 text-slate-800">
          Create Post
        </button>
      </div>
    </form>
  )
}

const PlayerBar = () => (
  <footer className="border-t border-slate-200 bg-white px-4 py-3">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded bg-slate-200" />
        <div>
          <p className="text-sm font-medium text-slate-900">Select a song</p>
          <p className="text-xs text-slate-500">Artist</p>
        </div>
      </div>
      <div className="text-xs text-slate-400">Player controls coming soon</div>
      <div className="w-12" />
    </div>
  </footer>
);

export default PlayerBar;
